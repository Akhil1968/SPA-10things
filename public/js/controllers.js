var appControllers = angular.module('appControllers', []);

appControllers.controller('ListController', ['$http', function($http) {
  var selfLC = this;
  $http.get('/data.json').success(function(data) {
    selfLC.tenThings = data;   
  });
}]);

appControllers.controller('DetailsController', ['$http','$routeParams', 
  function($http, $routeParams) {
  var selfDC = this;
  $http.get('/data.json').success(function(data) {
    selfDC.tenThings = data;   
    selfDC.whichItem = $routeParams.itemId;  
      
    if (selfDC.whichItem > 0) {
      selfDC.prevItem = Number(selfDC.whichItem)-1;
    } else {
      selfDC.prevItem = selfDC.tenThings.length-1;
    }

    if (selfDC.whichItem < selfDC.tenThings.length-1) {
      selfDC.nextItem = Number(selfDC.whichItem)+1;
    } else {
      selfDC.nextItem = 0;
    }  
      
  });
}]);


