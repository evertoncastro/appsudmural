var app = angular.module('mobile');

app.controller("MessageDetailsCtrl", MessageDetailsCtrl);

function MessageDetailsCtrl($scope, serviceMessage, servicePerson){
    $scope.message = {};
    $scope.init = function(){
        var message = serviceMessage.getMessage();
        servicePerson.loadPersonInfo(message.personUrlSafe).then(
          function(data){
            $scope.person = data;
            $scope.message = message;
          }
        );

    };

    $scope.init();
}
