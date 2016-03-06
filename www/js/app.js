
angular.module('mobile', ['ionic', 'ngCordova'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
        //controller: 'AppCtrl'
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('app.event', {
        url: '/event',
        views: {
          'menuContent': {
            templateUrl: 'templates/event.html'
            //controller: 'PlaylistCtrl'
          }
        }
      });
    $urlRouterProvider.otherwise('app/home');
  }).directive('backImg', function(){
    return function(scope, element, attrs){
      var url = attrs.backImg;
      element.css({
        'background-image': 'url(' + url +')' ,
        'background-size' : 'cover'
      });
    };
  });

var app = angular.module('mobile');

app.directive('imageonload', function ($timeout) {
    return {
      restrict: 'A',
      require: '?ngModel',
      scope: {
        ngModel: '='
      },
      link: function (scope, element) {
        element.bind('load', function () {
          scope.ngModel = true;
        });

        // in any kind of situation this will remove spinner image....
        $timeout(function () {
          //element.addClass('spinner-hide');
          scope.ngModel = true;
        }, 3000);
      }
    };
  }).constant('$ionicLoadingConfig', {
    template: '<ion-spinner icon="bubbles"></ion-spinner>'
  });
