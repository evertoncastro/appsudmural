var app = angular.module('mobile');

app.controller("MessageDetailsCtrl", MessageDetailsCtrl);

function MessageDetailsCtrl($scope, serviceMessage, servicePerson, $ionicLoading, $timeout){
    $scope.message = {};
    $scope.init = function(){
        $ionicLoading.show();
        var message = serviceMessage.getMessage();
        servicePerson.loadPersonInfo(message.person_id).then(
          function(data){
            $scope.person = data;
            $scope.message = message;
            $timeout(function() {
              $ionicLoading.hide();
            }, 1000);
          },function(){
            $ionicLoading.hide();
          }
        );

    };

    $scope.init();
}
