(function(){
  var app=angular.module('index',[])

  app.controller('IndexController', function($scope){
      $scope.pageClass = 'index';
  });

  app.directive('siteNavigation', function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/site-navigation.html'
    }
  });

})();