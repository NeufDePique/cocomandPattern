document.addEventListener("DOMContentLoaded", function(_e) {

var message = document.getElementById("message");
message.style.display = "none";

var co = document.getElementById("co");
co.addEventListener("click", function(e){
    var con = document.getElementById("pseudo");
    con.style.display = "none";
    var pseudo = document.getElementById("pseudo_input").value;
    message.style.display = "block";
    chat(pseudo);

});

function chat(pseudo){

    //QUITTER
    var quit = document.getElementById("btnQuitter");
    quit.addEventListener("click", function(e){
        window.location.reload();
    });

    var socket = io.connect();
    //ENVOIE DU NOM DE L'UTILISATEUR QUI VIENS DE CE CONNECTER
    socket.emit("login", pseudo);

    //MAJ DU TITRE
    var titre = document.getElementById("login");
    titre.innerHTML = pseudo;

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

            if (message.charAt(0) == '@'){
                var name = "";
                for (var i = 1; message.charAt(i) !== ' '; ++i){
                    name += message.charAt(i);
                }
                console.log("message : " + message);
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
