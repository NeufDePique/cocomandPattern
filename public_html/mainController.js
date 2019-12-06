var main = angular.module('main', []);

var generateCode = function(word) {
    var dec = Math.floor(Math.random() * 26 + 1);
    var size = word.length;
    var end = "";
    for (var i = 0; i < size; ++i) {
        end += String.fromCharCode(((word.charCodeAt(i) + dec) % 26) + "a".charCodeAt(0));
        console.log(end);
    }
    return end;
}

main.controller("mainController", function($scope) {
    $scope.value = Math.random();
    //$scope.secret = generateCode("ydkozjtotn");
});

main.component("menu", {
    template: "<a href=\"index.html\">Accueil</a> <a href=\"chat.html\">Chatter avec d'autres étudiants</a>",
    controller: function MenuController() {}
});


main.component("foot", {
    template:  '<footer class="footer">' +
					'<div class="col">' +
						'<a class="footer--link" href="http://www.univ-fcomte.fr/"><img class="footer--img" src="https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Universit%C3%A9_de_Franche-Comt%C3%A9_%28logo%29.svg/619px-Universit%C3%A9_de_Franche-Comt%C3%A9_%28logo%29.svg.png" alt="UFC" /></a>' +
					'</div>' +
					'<div class="col">' +
						'<a class="footer--link" href="http://www.jet1oeil.com/"><img class="footer--img" src="http://www.jet1oeil.com/wp-content/uploads/2011/09/logo.png" alt="jet1oeil" /></a>' +
					'</div>' +
					'<div class="col">' +
						'<a class="footer--link" href="http://www.smartesting	.com/"><img class="footer--img" src="https://static.wixstatic.com/media/e4c5c8_7d1d7df34bb84d07bd6ff004fffb6eec~mv2.jpg/v1/fill/w_221,h_71,al_c,q_80,usm_0.66_1.00_0.01/logo-smartesting_Sendinblue.webp" alt="smartesting"/></a>' +
					'</div>' +
					'<div class="col">' +
						'<a class="footer--link" href="https://vixtechnology.com/"><img class="footer--img" src="https://upload.wikimedia.org/wikipedia/en/4/4e/Vix_Technology_logo.png" alt="Vix Technology"></a>' +
					'</div>' +
					'<div class="col">' +
						'<a class="footer--link" href="http://fug-game.com/"><img class="footer--img" src="http://fug-game.com/wp-content/uploads/2018/09/logo-fug-game-blason.png" alt="fug-games" /></a>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</footer>',
    controller: function MenuController() {} 
});
