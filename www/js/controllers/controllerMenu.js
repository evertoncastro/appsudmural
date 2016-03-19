var app = angular.module('mobile');

app.controller("MenuCtrl", MenuCtrl);

function MenuCtrl($scope, $ionicPopover, $state){

    $scope.goToSuggestions = function(){
        $state.go('app.suggestions');
    };

    $scope.openWhatsApp = function(){
        cordova.plugins.Whatsapp.send("11985694648");
    };

    $ionicPopover.fromTemplateUrl('templates/popover/config.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });


    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function() {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();
    });
}
