(function(){

  var app = angular.module('portfolio', [])

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

  app.directive('portfolioMobile', function(){
    return{
      restrict: 'E',
      templateUrl: 'templates/portfolio.html'
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

  // Works will be moved to the database

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
      url: "http://the-food-finder.herokuapp.com/",
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
          full: [
            '/images/content_full/wearable/wearable-1.jpg',
            '/images/content_full/wearable/wearable-2.jpg',
            '/images/content_full/wearable/wearable-3.jpg'
            ],
          thumb: '/images/content_thumbs/wearable-thm.jpg'
        }
      ]
    },
    {
      id: 4,
      title: 'Mastermind: Sly Stallone',
      full_title: 'Mastermind: Sylvester Stallone Edition',
      category: 'development',
      video_url: false,
      url: 'http://mastermind-stallone-edition.herokuapp.com/',
      github: 'https://github.com/mrweckel/Mastermind-Stallone-Edition',
      content: '',
      images: [
        {
          full: [
            '/images/content_full/mastermind/mastermind-1.jpg',
            '/images/content_full/mastermind/mastermind-2.jpg',
            '/images/content_full/mastermind/mastermind-3.png'
            ],
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
          full: [
            '/images/content_full/static/static-1.jpg',
            '/images/content_full/static/static-2.jpg',
            '/images/content_full/static/static-3.jpg'
            ],
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
          full: [
            '/images/content_full/youtube/youtube-1.jpg',
            '/images/content_full/youtube/youtube-2.jpg',
            '/images/content_full/youtube/youtube-3.jpg'
            ],
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
          full: [
            '/images/content_full/pitchstart/pitchstart-1.png',
            '/images/content_full/pitchstart/pitchstart-2.png',
            '/images/content_full/pitchstart/pitchstart-3.png'
            ],
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
          full: [
            '/images/content_full/dumbo/dumbo-1.jpg',
            '/images/content_full/dumbo/dumbo-2.jpg',
            '/images/content_full/dumbo/dumbo-3.jpg'
            ],
          thumb: '/images/content_thumbs/crossing-dumbo-thm.jpg'
        }
      ]
    }
  ]

  })();