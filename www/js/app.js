
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

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {
    //$httpProvider.defaults.timeout = 10000;
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
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
    .state('app.events', {
        url: '/events',
        views: {
            'menuContent': {
                templateUrl: 'templates/events.html',
                controller: "EventListCtrl"
            }
        }
    })
    .state('app.event-details', {
        url: '/event-details',
        views: {
            'menuContent': {
                templateUrl: 'templates/event-details.html',
                controller: 'EventDetailsCtrl'
            }
        }
    })
    .state('app.messages', {
        url: '/messages',
        views: {
            'menuContent': {
                templateUrl: 'templates/messages.html',
                controller: 'MessageListCtrl'
            }
        }
    })
    .state('app.message-details', {
        url: '/message-details',
        views: {
            'menuContent': {
                templateUrl: 'templates/message-details.html',
                controller: 'MessageDetailsCtrl'
            }
        }
    }).state('app.colaboration', {
        url: '/colaboration',
        views: {
          'menuContent': {
            templateUrl: 'templates/colaboration.html',
            controller: 'ColaborationCtrl'
          }
        }
    });
    $urlRouterProvider.otherwise('app/home');
    $ionicConfigProvider.backButton.previousTitleText(false);
    $ionicConfigProvider.backButton.text('voltar');
    $ionicConfigProvider.navBar.alignTitle('center');
    if(!ionic.Platform.isIOS())$ionicConfigProvider.scrolling.jsScrolling(false);
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
