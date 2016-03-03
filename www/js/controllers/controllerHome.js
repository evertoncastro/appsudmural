angular.module('mobile').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, serviceEvent){

    $scope.eventList = [];

    $scope.init = function(){
        serviceEvent.loadEvent().then(
          function(response){
            $scope.eventList = response.data;
          }
        );
    };

    $scope.init();
}
