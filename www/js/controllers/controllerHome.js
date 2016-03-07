angular.module('mobile').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, serviceEvent, serviceMessage){

    $scope.eventList = [];

    $scope.init = function(){
      serviceEvent.loadEvent('banner').then(
        function(response){
          $scope.eventList = response.data;
        }
      );

      serviceMessage.loadMessage('banner').then(
        function(response){
          $scope.messageList = response.data;
        }
      );

    };

    $scope.init();
}
