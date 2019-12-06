var main = angular.module('main', []);

var generateCode = function(word) {
    var dec = Math.floor(Math.random() * 26 + 1);
    var size = word.length;
    var end = "";
    for (var i = 0; i < size; ++i) {
        end[i]  = String.fromCharCode(word.charCodeAt(i) + dec);
    }
    return end;
}

main.controller("mainController", function($scope) {
    $scope.value = Math.random();
    $scope.secret = generateCode("YdKozjtoTn");
});

/* main.component("menu", {
    template: "<a href=\"index.html\">Accueil</a> <a href=\"chat.html\">Chatter avec d'autres étudiants</a>",
    controller: function MenuController() {}
});

main.component("footer", {
    template:  "Voici la liste des sponsors, elle doit toujours être visible avec leur logo (en bas de page ça convient tout à fait) :<br />" +
    "<a href=\"http://disc.univ-fcomte.fr/\"><img src=\"http://sciences.univ-fcomte.fr/download/ufr-st/image/laboratoires/femto-st.jpg\" alt=\"DISC\"/></a>" +
    "<a href=\"http://www.univ-fcomte.fr/\"><img src=\"https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Universit%C3%A9_de_Franche-Comt%C3%A9_%28logo%29.svg/619px-Universit%C3%A9_de_Franche-Comt%C3%A9_%28logo%29.svg.png\" alt=\"UFC\"/></a>" +
    "<a href=\"http://www.jet1oeil.com/\"><img src=\"http://www.jet1oeil.com/wp-content/uploads/2011/09/logo.png\" alt=\"jet1oeil\"/></a>"+
    "<a href=\"http://www.smartesting.com/\"><img src=\"https://static.wixstatic.com/media/e4c5c8_7d1d7df34bb84d07bd6ff004fffb6eec~mv2.jpg/v1/fill/w_221,h_71,al_c,q_80,usm_0.66_1.00_0.01/logo-smartesting_Sendinblue.webp\" alt=\"smartesting\"/></a>"+
    "<a href=\"https://vixtechnology.com/\"><img src=\"https://upload.wikimedia.org/wikipedia/en/4/4e/Vix_Technology_logo.png\" alt=\"Vix Technology\">"+
    "<a href=\"http://fug-game.com/\"><figure><img src=\"http://fug-game.com/wp-content/uploads/2018/09/logo-fug-game-blason.png\" alt=\"fug-games\" /><figcaption>FUG GAME</figcaption></figure></a>",
    controller: function MenuController() {} 
}); */
