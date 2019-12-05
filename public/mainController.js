var main = angular.module('main', []);

main.controller("mainController", function($scope) {
    $scope.value = Math.random();
});

main.component("menu", {
    template: "this is the menu",
    controller: function MenuController() {}
});