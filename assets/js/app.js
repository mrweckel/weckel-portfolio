(function(){
  'use strict'

  var app = angular.module('port', ['angular-velocity','ngRoute','ngAnimate']);

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
    });

  });

  app.controller('IndexController', function($scope){
      $scope.pageClass = 'index';
  });

  app.controller('AboutController', function($scope){
      $scope.pageClass = 'page-about';
  });

  app.controller('ContentController',function($scope){
      $scope.pageClass = 'page-portfolio';
      this.projects = works;

      this.page = 0;
      this.setPage = function(setPage){
        this.page = setPage;
      };
      this.isSelected = function(checkPage){
        return this.page === checkPage;
      };
  });

  app.directive('siteNavigation', function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/site-navigation.html'
    }
  });

  app.directive('index', function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/index.html'
    }
  });

//SIDEBAR BEGIN
  app.directive("projectSidebar", function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/project-sidebar.html',
      controller: 'ContentController',
      controllerAs: 'contentCtrl'
    }
  })

  app.directive('ferrari', function(){
      return{
        restrict: 'E',
        templateUrl: 'templates/projects/ferrari.html',
        controller: function(){
          this.project = works[0];
        },
        controllerAs:'ferrari'
      }
  });

  app.directive('foodFinder', function(){
      return{
        restrict: 'E',
        templateUrl: 'templates/projects/food-finder.html',
        controller: function(){
          this.project = works[1];
        },
        controllerAs:'food'
      }
  });

  app.directive('makeItWearable', function(){
      return{
        restrict: 'E',
        templateUrl: 'templates/projects/wearable.html',
        controller: function(){
          this.project = works[2];
        },
        controllerAs:'wearable'
      }
  });

  app.directive('mastermind', function(){
      return{
        restrict: 'E',
        templateUrl: 'templates/projects/mastermind.html',
        controller: function(){
          this.project = works[3];
        },
        controllerAs:'mastermind'
      }
  });

  app.directive('dreams', function(){
      return{
        restrict: 'E',
        templateUrl: 'templates/projects/dreams.html',
        controller: function(){
          this.project = works[4];
        },
        controllerAs:'dreams'
      }
  });

  app.directive('static', function(){
      return{
        restrict: 'E',
        templateUrl: 'templates/projects/static.html',
        controller: function(){
          this.project = works[5];
        },
        controllerAs:'static'
      }
  });

  app.directive('youtube', function(){
      return{
        restrict: 'E',
        templateUrl: 'templates/projects/youtube.html',
        controller: function(){
          this.project = works[6];
        },
        controllerAs:'youtube'
      }
  });

  app.directive('pitchstart', function(){
      return{
        restrict: 'E',
        templateUrl: 'templates/projects/pitchstart.html',
        controller: function(){
          this.project = works[7];
        },
        controllerAs:'pitchstart'
      }
  });

  app.directive('dumbo', function(){
      return{
        restrict: 'E',
        templateUrl: 'templates/projects/dumbo.html',
        controller: function(){
          this.project = works[8];
        },
        controllerAs:'dumbo'
      }
  });


  //SIDEBAR END

  var works = [
    {
      id: 1,
      title: 'Ferrari Scuderia',
      full_title: 'Scuderia Corsa 120: Raceday at Laguna Seca with Ferrari',
      category: 'film',
      video_url: "https://www.youtube.com/watch?v=31in9i03OOs",
      url: false,
      github: false,
      content: '',
      images: [
        {
          full: [
            '/images/content_full/ferrari/ferrari-1.jpg',
            '/images/content_full/ferrari/ferrari-2.jpg',
            '/images/content_full/ferrari/ferrari-3.jpg'
            ],
          thumb: '/images/content_thumbs/ferrari-thm.jpg'
        }
      ]
    },
    {
      id: 2,
      title: 'The Food Finder',
      category: 'development',
      video_url: false,
      url: false,
      github: 'https://github.com/mrweckel/the-food-finder',
      content: '',
      images: [
        {
          full: [
            '/images/content_full/food-finder/food-finder-1.png',
            '/images/content_full/food-finder/food-finder-2.png',
            '/images/content_full/food-finder/food-finder-3.png'
            ],
          thumb: '/images/content_thumbs/food-finder-thm.jpg'
        }
      ]
    },
    {
      id: 3,
      title: 'Intel Make It Wearable',
      category: 'film',
      video_url: 'https://www.youtube.com/watch?v=O0iPNr-142Q',
      url: false,
      github: false,
      content: '',
      images: [
        {
          full: '',
          thumb: '/images/content_thumbs/wearable-thm.jpg'
        }
      ]
    },
    {
      id: 4,
      title: 'Mastermind: Sly Stallone',
      category: 'development',
      video_url: false,
      url: 'http://mastermind-stallone-edition.herokuapp.com/',
      github: 'https://github.com/mrweckel/Mastermind-Stallone-Edition',
      content: '',
      images: [
        {
          full: '',
          thumb: '/images/content_thumbs/stallone-thm.jpg'
        }
      ]
    },
    {
      id: 5,
      title: 'Dreams',
      category: 'development',
      video_url: false,
      url: 'http://memoryfinder.herokuapp.com/',
      github: 'https://github.com/mrweckel/dreams',
      content: '',
      images: [
        {
          full: [
            '/images/content_full/dreams/dreams-1.png',
            '/images/content_full/dreams/dreams-2.png',
            '/images/content_full/dreams/dreams-3.png'
            ],
          thumb: '/images/content_thumbs/dreams-thm.jpg'
        }
      ]
    },
    {
      id: 6,
      title: 'Static: Music Video',
      category: 'film',
      video_url: 'https://www.youtube.com/watch?v=oEgbn_OZJ9Y',
      url: false,
      github: false,
      content: '',
      images: [
        {
          full: '',
          thumb: '/images/content_thumbs/static-thm.jpg'
        }
      ]
    },
    {
      id: 7,
      title: 'Youtube Music Awards',
      category: 'film',
      video_url: 'https://www.youtube.com/watch?v=ZXlSgJIE8Io',
      url: false,
      github: 'https://github.com/mrweckel/dreams',
      content: '',
      images: [
        {
          full: '',
          thumb: '/images/content_thumbs/youtube-thm.jpg'
        }
      ]
    },
    {
      id: 8,
      title: 'PitchStart',
      category: 'development',
      video_url: false,
      url: false,
      github: 'https://github.com/mrweckel/PitchStart',
      content: '',
      images: [
        {
          full: '',
          thumb: '/images/content_thumbs/pitchstarter-thm.jpg'
        }
      ]
    },
    {
      id: 9,
      title: 'Crossing Dumbo',
      category: 'film',
      video_url: 'https://vimeo.com/35782011',
      url: false,
      github: false,
      content: '',
      images: [
        {
          full: '',
          thumb: '/images/content_thumbs/crossing-dumbo-thm.jpg'
        }
      ]
    }
  ]

})();

/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#fd7777',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 0.5,
    size: 4,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fd7777',
      opacity: 0.5,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove" (particles)
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});