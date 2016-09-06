var app = angular.module('mobile');

app.controller("MissionaryDetailsCtrl", MissionaryDetailsCtrl);

function MissionaryDetailsCtrl($scope, serviceMissionary, $ionicModal){
    $scope.data = {};
    $scope.missionary = {};
    $scope.init = function(){
      $scope.missionary = serviceMissionary.getMissionary();
    };

    $scope.sendEmail = function(){
      serviceMissionary.sendMissionaryEmail($scope.data).then(
        function(){
          $scope.closeModal();
        }
      );
    };


    $ionicModal.fromTemplateUrl('templates/modal/missionary-email.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {

    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {

    });

    $scope.init();
}
