document.addEventListener("DOMContentLoaded", function(_e) {
var co = document.getElementById("btnConnecter");
co.addEventListener("click", function(e){
    var pseudo = document.getElementById("pseudo");
    if (pseudo.value.length == 0){
        return;
    }
    chat(pseudo.value);
});

function chat(pseudo){
    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = true;

    //QUITTER
    var quit = document.getElementById("btnQuitter");
    quit.addEventListener("click", function(e){
        window.location.reload();
    });

    var socket = io.connect('http://localhost:8080');
    //ENVOIE DU NOM DE L'UTILISATEUR QUI VIENS DE CE CONNECTER
    socket.emit("login", pseudo);

    //MAJ DU TITRE
    var titre = document.getElementById("login");
    titre.innerHTML = pseudo;

    //
    socket.on("bienvenue", function(login){
        var list_client = document.querySelector("aside");
        var html = "<p>" + login + "</p>";
        list_client.innerHTML += html;
    });

    //RECUPERATION DE LA LISTE DES UTILISATEURS CONNECTES
    socket.on("liste", function(login){
        var html = "";
        login.forEach(function(elem){
            html += "<p>" + elem + "</p>";
        });
        var list_client = document.querySelector("aside");
        list_client.innerHTML = html;
    });

    //RECUPERATION DES MSG
    socket.on("message", function(msg){

        var html = "";
        if (msg.from == null && msg.to == null){ //MSG QUAND UN UTILISATEUR CE CONNECTE
            var date = new Date(parseInt(msg.date));
            html += "<p class=\"system\">" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - [admin] " + msg.text + "</p>";
        } else if (msg.to == null){ //MSG D'UN UTILISATEUR VERS TOUT LES AUTRES
            var date = new Date(parseInt(msg.date));
            if (msg.from == pseudo){
                html += "<p class=\"moi\">";
            } else {
                html += "<p>";
            }

            if (msg.text.match(/\[img:.*/)){
                var img = msg.text.match(/\[img:.*/).input;
                var n = img.substr(5);
                var lien = n.substr(0, n.length-1);
                msg.text = "<img src=\""+lien+"\">";
            }

            html += date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - " + msg.from + " : " + msg.text + "</p>";
        } else { //MP
            var date = new Date(parseInt(msg.date));
            if (msg.from == pseudo){
                html += "<p class=\"moi\">";
            } else {
                html += "<p class=\"mp\">";
            }
            html += date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - " + msg.from + " (à " + msg.to + ") : " + msg.text + "</p>";
        }

        var mess = document.querySelector("main");
        mess.innerHTML += html;
    });

    //ENVOI D'UN MASSAGE
    var envoyer_msg = document.getElementById("btnEnvoyer");
    envoyer_msg.addEventListener("click", function(e){
        var mess = document.querySelector("input[id=monMessage]");
        var message = mess.value;
        if (message.length != 0){

            var reg = new RegExp(':lol:');
            message = message.replace(reg, '<span class="emoji rire"></span>');

            var reg2 = new RegExp(':zzz:');
            message = message.replace(reg2, '<span class="emoji zzz"></span>');

            var reg3 = new RegExp(':love:');
            message = message.replace(reg3, '<span class="emoji love"></span>');

            var reg4 = new RegExp(':holala:');
            message = message.replace(reg4, '<span class="emoji holala"></span>');

            var reg5 = new RegExp(':grrr:');
            message = message.replace(reg5, '<span class="emoji grrr"></span>');

            var reg6 = new RegExp(':triste:');
            message = message.replace(reg6, '<span class="emoji triste"></span>');

            var reg7 = new RegExp(':sourire:');
            message = message.replace(reg7, '<span class="emoji sourire"></span>');

            var reg8 = new RegExp(':banane:');
            message = message.replace(reg8, '<span class="emoji banane"></span>');

            var reg9 = new RegExp(':malade:');
            message = message.replace(reg9, '<span class="emoji malade"></span>');

            if (message.charAt(0) == '@'){
                var name = "";
                for (var i = 1; message.charAt(i) !== ' '; ++i){
                    name += message.charAt(i);
                }
                socket.emit("message", {from: pseudo, to: name, text: message, date: Date.now()});
            } else {
                socket.emit("message", {from: pseudo, to: null, text: message, date: Date.now()});
            }
        }
        mess.value = "";
    });

    //IMAGES
    var imgs = document.getElementById("btnImage");
    imgs.addEventListener("click", function(e){

        var fen_img = document.getElementById("bcImage");
        fen_img.style.display = "block";

        var rech = document.getElementById("btnRechercher");
        rech.addEventListener("click", function(e){
            var rech_img = document.getElementById("recherche").value;

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200){
                    var data = JSON.parse(this.responseText);
                    var results = data.data;
                    var size_r = results.length;
                    var html = "";

                    results.forEach(function(elem){
                        html += "<img id=\""+elem.images.downsized.url+"\" src=\"" + elem.images.downsized.url + "\">";
                    });

                    var result = document.getElementById("bcResults");
                    result.innerHTML = html;

                    results.forEach(function(elem){
                        var listen = document.getElementById(elem.images.downsized.url);
                        listen.addEventListener("click", function(e){
                            socket.emit("message", {from: pseudo, to: null, text: "[img:"+elem.images.downsized.url+"]", date: Date.now()});
                            fen_img.style.display = "none";
                        });
                    });
                }
            }
            xhttp.open("get", "http://api.giphy.com/v1/gifs/search?q="+ rech_img + "&api_key=0X5obvHJHTxBVi92jfblPqrFbwtf1xig&limit=15", true);
            xhttp.send();
        });

        var fermer_fen = document.getElementById("btnFermer");
        fermer_fen.addEventListener("click", function(e){
            fen_img.style.display = "none";
        });
    });
}
});
