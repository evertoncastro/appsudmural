angular.module('mobile').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, serviceEvent, $state, serviceBanner, serviceMessage, $ionicLoading, $timeout){

    $scope.eventList = [];
    $scope.messageList = [];

    $scope.init = function(){
      $ionicLoading.show();
      serviceBanner.loadBannerList().then(
        function(response){
          $scope.bannerList = response.data;
          $timeout(function() {
            $ionicLoading.hide();
          }, 1000);
          $scope.showBox = true;
        },
        function(){
          $ionicLoading.hide();
        }
      );


    };

    $scope.goToDetails = function(data){
        if(data && data.type == 'event'){
          serviceEvent.setEventInfo(data);
          $state.go("app.event-details");
        }else if(data && data.type == 'message') {
          serviceMessage.setMessage(data);
          $state.go("app.message-details");
        }
    };


    $scope.goToMessageList = function(){
      $state.go('app.messages');
    };

    $scope.goToEventList = function(){
      $state.go('app.events');
    };

    $scope.goToMissionaryList = function(){
      $state.go('app.missionary');
    };

    $scope.init();
}
