angular.module("myApp", [])
    .controller("HelloController", ['$scope', function($scope) {
        $scope.name = "World";
    }] );
