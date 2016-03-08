var app = angular.module('mobile');

app.controller("MessageDetailsCtrl", MessageDetailsCtrl);

function MessageDetailsCtrl($scope, serviceMessage){
    $scope.data = {};
    $scope.init = function(){
        $scope.data = serviceMessage.getMessage();
    };

    $scope.init();
}
