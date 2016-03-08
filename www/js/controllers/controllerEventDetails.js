var app = angular.module('mobile');

app.controller("EventDetailsCtrl", EventDetailsCtrl);

function EventDetailsCtrl($scope, serviceEvent){
    $scope.data = {};
    $scope.init = function(){
        $scope.data = serviceEvent.getEventInfo();
    };

    $scope.init();
}
