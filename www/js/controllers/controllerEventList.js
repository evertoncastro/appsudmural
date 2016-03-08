var app = angular.module("mobile");

app.controller("EventListCtrl", EventListCtrl);

function EventListCtrl($scope, serviceEvent, $ionicLoading, $state){
    $scope.data = {};
    $scope.init = function(){
        $ionicLoading.show();
        serviceEvent.loadEvent().then(
            function(resp){
                $ionicLoading.hide();
                $scope.data.list = resp.data;
            }
        );
    };
    $scope.goToEventDetails = function(event){
        serviceEvent.setEventInfo(event);
        $state.go("app.event-details");
    };
    $scope.init();
}
