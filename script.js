var app =angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'main.html',
  });

  $routeProvider.when('/Dog', {
    templateUrl: 'Dog.html',
    controller: 'dogController'
  });

  $routeProvider.when('/Cat', {
    templateUrl: 'cat.html',
    controller: 'catController'
  });

  $routeProvider.when('/lemur', {
    templateUrl: 'lemur.html',
    controller: 'lemurController'
  });

  $routeProvider.when('/lion', {
    templateUrl: 'lion.html',
    controller: 'lionController'
  });

  $routeProvider.otherwise( {
    redirectTo:'/404',
    templateUrl: 'whale.html',
    controller: 'whaleController'
  });

});


