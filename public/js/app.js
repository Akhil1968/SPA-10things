var myApp = angular.module('myApp', ['ngRoute','appControllers']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider. 
  when('/list', {
    templateUrl: 'partials/home.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/detailed.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);