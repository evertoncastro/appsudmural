var app = angular.module('mobile');

app.controller("ColaborationCtrl", ColaborationCtrl);

function ColaborationCtrl($scope, serviceColaboration){

    $scope.sendEmail = function(type){
        serviceColaboration.sendEmail(type);
    }

}
