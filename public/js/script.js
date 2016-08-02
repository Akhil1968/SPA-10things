var myApp = angular.module('myApp', ['ngRoute','appControllers']);

myApp.config(['$routeProvider', function(rp) {
  rp. 
  when('/list', {
    templateUrl: 'partials/home.html',
    controller: 'ListController',
    controllerAs: 'lc'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/detailed.html',
    controller: 'DetailsController',
    controllerAs: 'dc'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);