angular.module('mobile').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, serviceEvent, $state){

    $scope.eventList = [];

    $scope.init = function(){
        serviceEvent.loadEvent().then(
          function(response){
            $scope.eventList = response.data;
          }
        );
    };

    $scope.goToEventDetails = function(event){
        serviceEvent.setEventInfo(event);
        $state.go("app.event-details");
    };
    $scope.init();
}
