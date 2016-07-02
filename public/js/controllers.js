var appControllers = angular.module('appControllers', []);

appControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('/js/data.json').success(function(data) {
    $scope.tenThings = data;   
  });
}]);

appControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('/js/data.json').success(function(data) {
    $scope.tenThings = data;   
    $scope.whichItem = $routeParams.itemId;  
      
    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.tenThings.length-1;
    }

    if ($routeParams.itemId < $scope.tenThings.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }  
      
  });
}]);


