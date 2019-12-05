var main = angular.module('main', []);

main.controller("mainController", function($scope) {
    $scope.value = Math.random();
});

main.component("menu", {
    template: "<a href=\"index.html\">Accueil</a> <a href=\"chat.html\">Chatter avec d'autres étudiants</a>",
    controller: function MenuController() {}
});
