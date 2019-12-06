function gilletJaune(brigitte){
    if (brigitte == 1){
        return "<h2>Les citations perlinpinpin de Manu !</h2><table id=\"table\"><tr><td><img src=\"/images/macron.png\" alt=\"manu\" id=\"imgPres\"/></td><td><div id=\"theConseil\"></div></td></tr></table>";
    } else if (brigitte == 2){
        return "<h2>Les citations flamby de H !</h2><table id=\"table\"><tr><td><img src=\"/images/hollande.png\" alt=\"hollande\" id=\"imgPres\"/></td><td><div id=\"theConseil\"></div></td></tr></table>";
    } else if (brigitte == 3){
        return "<h2>Les citations karcher de Sarko !</h2><table id=\"table\"><tr><td><img src=\"/images/sarko.png\" alt=\"sarko\" id=\"imgPres\"/></td><td><div id=\"theConseil\"></div></td></tr></table>";
    }
}

function discoursNonPrepare(pompidou){
    if (pompidou == 1){
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
    } else if (pompidou == 3){
        return ['Rendre autonome les universités, c\'est faire confiance au monde enseignant',
        'Vous voulez moins de riche, je veux moins de pauvre !',
        'Casse toi pauvre con !',
        'Je pense que ce qui est le plus important dans chaque existance c\'est l\'espérence et ce quelquesoit son âge et son parcours',
        'On ne diras jamais assez tous le mal que les 35 heures ont fait à notre pays',
        'Mourir ce n\'est pas facile !',
        'La croissance, j\'irais la chercher avec les dents'
    ];
} else if (pompidou == 2){
        return  ['Oui je n\'aime pas les riches. Je n\'aime pas les riches j\'en conviens',
            'Le patriotisme économique n\'est que la face cocardière du clientélisme',
            'Gouverner c\'est pleuvoir',
            'Ne payez pas les transports en commun !'
    ];
    }
}

function getNombreManifestantSelonLaPolice(styloRouge) {
    return Math.floor(Math.random() * Math.floor(styloRouge));
};

document.addEventListener("DOMContentLoaded", function(_e) {

    var elysee = document.getElementById('voir');
    elysee.style.display = "none";

    var lois = document.getElementById('voirConseil');
    lois.addEventListener("click", function(e){
        var mitterand = document.getElementById('manuR');
        var giscard = document.getElementById('hollR');
        var deGaulle = document.getElementById('sarkoR');

        var republique;
        var cahierDeDoleance;

        if (mitterand.checked){
            republique = gilletJaune(1);
            cahierDeDoleance = discoursNonPrepare(1);
        } else if (giscard.checked){
            republique = gilletJaune(2);
            cahierDeDoleance = discoursNonPrepare(2);
        } else if (deGaulle.checked){
            republique = gilletJaune(3);
            cahierDeDoleance = discoursNonPrepare(3);
        }

        elysee.innerHTML = republique;
        elysee.style.display = "block";

        var mandat = document.getElementById('imgPres');
        mandat.addEventListener("click", function(e){

        var quinquenat = cahierDeDoleance.length;

        var compatriotes = document.getElementById('theConseil');
            compatriotes.innerHTML = "<p>" + cahierDeDoleance[getNombreManifestantSelonLaPolice(quinquenat)] + "</p>";
        });
    });
});
