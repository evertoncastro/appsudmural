var app = angular.module("mobile");

app.controller("MessageListCtrl", MessageListCtrl);

function MessageListCtrl($scope, serviceMessage, $ionicLoading, $state){
    $scope.data = {};
    $scope.init = function(){
        $ionicLoading.show();
        serviceMessage.loadMessage('').then(
            function(resp){
                $ionicLoading.hide();
                $scope.data.list = resp.data;
            }
        );
    };

    $scope.goToMessageDetails = function(message){
        serviceMessage.setMessage(message);
        $state.go("app.message-details");
    };
    $scope.init();
}
