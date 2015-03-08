(function(){
  var app=angular.module('routes',['ngRoute'])
  app.config(function($routeProvider){
    $routeProvider

    .when('/',{
      templateUrl : 'templates/index.html',
      controller: "IndexController"
    })

    .when('/about', {
      templateUrl: 'templates/about.html',
      controller: 'AboutController'
    })

    .when('/portfolio', {
      templateUrl: 'templates/portfolio.html',
      controller: 'ContentController'
    })

    .when('/client',{
      templateUrl: 'templates/client.html',
      controller: 'ClientController'
    })

    .when('/fun', {
      templateUrl: 'templates/fun.html',
      controller: 'FunController'
    });
  });

})();