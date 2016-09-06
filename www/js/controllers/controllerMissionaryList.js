var app = angular.module("mobile");

app.controller("MissionaryListCtrl", MissionaryListCtrl);

function MissionaryListCtrl($scope, serviceMissionary, $ionicLoading, $state){
    $scope.data = {};
    $scope.init = function(){
        $ionicLoading.show();
        serviceMissionary.loadMissionary().then(
            function(resp){
                $ionicLoading.hide();
                $scope.data.list = resp.data;
            }
        );
    };

    $scope.goToMissionaryDetails = function(missionary){
      serviceMissionary.setMissionary(missionary);
        $state.go("app.missionary-details");
    };

    $scope.init();

}
