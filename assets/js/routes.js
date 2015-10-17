angular.module("DCH").config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('layout', {
        abstract: true,
        templateUrl: "js/layout/layout.html"
      })
      .state('welcome', {
        parent: 'layout',
        url: '/',
        controller: 'WelcomeCtrl',
        templateUrl: "js/welcome/welcome.html"
      })
  });
