(function(){
  'use strict'

  var app = angular.module('port', ['angular-velocity','ngAnimate']);

  app.controller('ContentController',function(){
      this.projects = works;
  });


  app.controller('PageController', function(){
    this.page = 0;
    this.selectPage = function(setPage){
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

  app.directive('portfolioContainer', function(){
      return{
        restrict: 'E',
        templateUrl: 'templates/portfolio.html'
      }
  });

  app.directive('arrows', function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/arrows.html'
    }
  });

  var works = [
    {
      title: 'Ferrari Scuderia',
      category: 'film',
      video_url: 'https://www.youtube.com/watch?v=31in9i03OOs',
      url: false,
      github: false,
      content: '',
      images: [
        {
          full: '',
          thumb: '/images/content_thumbs/ferrari-thm.jpg'
        }
      ]
    },
    {
      title: 'The Food Finder',
      category: 'development',
      video_url: false,
      url: false,
      github: 'https://github.com/mrweckel/the-food-finder',
      content: '',
      images: [
        {
          full: '',
          thumb: '/images/content_thumbs/food-finder-thm.jpg'
        }
      ]
    },
    {
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
      title: 'Dreams',
      category: 'development',
      video_url: false,
      url: 'http://memoryfinder.heroku.app',
      github: 'https://github.com/mrweckel/dreams',
      content: '',
      images: [
        {
          full: '',
          thumb: '/images/content_thumbs/dreams-thm.jpg'
        }
      ]
    },
    {
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
    color: '#fff',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 1,
    size: 4,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 1,
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