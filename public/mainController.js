var main = angular.module('main', []);

main.controller("mainController", function($scope) {
    $scope.value = Math.random();
});