angular.module("DCH").controller("WelcomeCtrl", [
  '$scope',
  '$http',
  function ($scope, $http) {

    $http.get('/api/dog').then(function (res) {
      $scope.dogs = res.data;
    });

    $scope.save = function() {
      $http.post('/api/dog', {name: $scope.dogName}).then(function (res) {
        $scope.dogs.push(res.data);
        $scope.dogName = '';
      });
    }
  }]);
