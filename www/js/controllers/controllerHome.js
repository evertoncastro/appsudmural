angular.module('mobile').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, serviceEvent, $state, serviceMessage, $ionicLoading, $timeout){

    $scope.eventList = [];
    $scope.messageList = [];

    $scope.init = function(){
      $ionicLoading.show();
      serviceEvent.loadEvent('banner').then(
        function(responseEvent){
          serviceMessage.loadMessage('banner').then(
            function(responseMessage){
              $scope.eventList = responseEvent.data;
              $scope.messageList = responseMessage.data;
              $timeout(function() {
                $ionicLoading.hide();
              }, 1000);
              $scope.showBox = true;
            },
            function(){
              $ionicLoading.hide();
            }
          );
        },
        function(){
          $ionicLoading.hide();
        }
      );


    };

    $scope.goToEventDetails = function(event){
        serviceEvent.setEventInfo(event);
        $state.go("app.event-details");
    };

    $scope.goToMessageDetails = function(message){
      serviceMessage.setMessage(message);
      $state.go("app.message-details");
    };

    $scope.goToMessageList = function(){
      $state.go('app.messages');
    };

    $scope.init();
}
