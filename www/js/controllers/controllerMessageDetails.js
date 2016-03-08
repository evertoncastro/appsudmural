var app = angular.module('mobile');

app.controller("MessageDetailsCtrl", MessageDetailsCtrl);

function MessageDetailsCtrl($scope, serviceMessage){
    $scope.message = {};
    $scope.init = function(){
        $scope.message = serviceMessage.getMessage();
    };

    $scope.init();
}
