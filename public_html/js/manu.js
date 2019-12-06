function getHtml(nb){
    if (nb == 1){
        return "<h2>Le conseil perlinpinpin de Manu !</h2><table id=\"table\"><tr><td><img src=\"/images/macron.png\" alt=\"manu\" id=\"imgPres\"/></td><td><div id=\"theConseil\"></div></td></tr></table>";
    } else if (nb == 2){
        return "<h2>Le conseil flamby de H !</h2><table id=\"table\"><tr><td><img src=\"/images/hollande.png\" alt=\"hollande\" id=\"imgPres\"/></td><td><div id=\"theConseil\"></div></td></tr></table>";
    } else if (nb == 3){
        return "<h2>Le conseil karcher de Sarko !</h2><table id=\"table\"><tr><td><img src=\"/images/sarko.png\" alt=\"sarko\" id=\"imgPres\"/></td><td><div id=\"theConseil\"></div></td></tr></table>";
    }
}

function getCitations(nb){
    if (nb == 1){
        return ['Il suffit de traverser la rue pour trouver un travail !',
                'Si j\'étais chômeur, je n\'attendrais pas tout de l\'autre, j\'essaierais de me battre d\'abord',
                'L\'espérance c\'est le premier risque, c\'est le risque des risques.',
                'Vous n\'allez pas me faire peur avec votre t-shirt, la meilleure façon de se payer un costard c\'est de travailler.',
                'Dans la vie il y a ceux qui travaillent et ceux qui ne sont rien !',
                'Draguez vos profs ! ',
                'On met un pognon de dingue dans des minima sociaux, les gens sont quand même pauvres !',
                'Qui serions nous pour dire à quelqu\'un qui souhaite travailler plus que c\'est impossible',
                'Je suis gilet jaune',
                'J\'ai toujours assumé la dimension de verticalité, de transcendance, mais en même temps elle doit s\'ancrer dans de l\'immanence complète, de la matérialité'
            ];
    } else if (nb == 3){
        return ['Rendre autonome les universités, c\'est faire confiance au monde enseignant',
        'Vous voulez moins de riche, je veux moins de pauvre !',
        'Casse toi pauvre con !',
        'Je pense que ce qui est le plus important dans chaque existance c\'est l\'espérence et ce quelquesoit son âge et son parcours'
    ];
} else if (nb == 2){
        return  ['Oui je n\'aime pas les riches. Je n\'aime pas les riches j\'en conviens',
            'Le patriotisme économique n\'est que la face cocardière du clientélisme',
            'Gouverner c\'est pleuvoir',
            'Ne payez pas les transports en commun !'
    ];
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

document.addEventListener("DOMContentLoaded", function(_e) {

    var voir = document.getElementById('voir');
    voir.style.display = "none";

    var c = document.getElementById('voirConseil');
    c.addEventListener("click", function(e){
        var m = document.getElementById('manuR');
        var h = document.getElementById('hollR');
        var s = document.getElementById('sarkoR');

        var htmlAdd;
        var cit;

        if (m.checked){
            htmlAdd = getHtml(1);
            cit = getCitations(1);
        } else if (h.checked){
            htmlAdd = getHtml(2);
            cit = getCitations(2);
        } else if (s.checked){
            htmlAdd = getHtml(3);
            cit = getCitations(3);
        }

        voir.innerHTML = htmlAdd;
        voir.style.display = "block";

        var imgPres = document.getElementById('imgPres');
        imgPres.addEventListener("click", function(e){

        var size = cit.length;

        var c = document.getElementById('theConseil');
            c.innerHTML = "<p>" + cit[getRandomInt(size)] + "</p>";
        });
    });
});
