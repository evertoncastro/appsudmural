var app = angular.module('mobile');

app.service('serviceMissionary', function($q, $http, $cordovaDialogs,$ionicLoading){

  var missionary = undefined;

  return {

    getMissionary: function(){
      return missionary;
    },

    setMissionary: function(data){
      missionary = data;
    },

    loadMissionary: function(){
      var defer = $q.defer();
      var URL = 'http://sudmural.appspot.com/clientLoadMissionaryList';
      $http.get(URL).then(
        function(response){
          defer.resolve(response);
        },
        function(error){
          defer.reject(error);
        }
      );
      return defer.promise;
    },

    sendMissionaryEmail: function(emailObj){
      var defer = $q.defer();
      if(!emailObj || !emailObj.senderName){
        $cordovaDialogs.alert('Informe seu nome.', 'Aviso', 'OK');
      }else if(!emailObj || !emailObj.sender){
        $cordovaDialogs.alert('Informe seu email.', 'Aviso', 'OK');
      }else if(!emailObj || !emailObj.content){
        $cordovaDialogs.alert('Escreva uma mensagem para o missionário.', 'Aviso', 'OK');
      }else{
        $ionicLoading.show();
        var json = {};

        var content = emailObj.content;
        content = content.replace(/\n/g, '<br>');


        json.type = 'missionary_email';
        json.receiver = missionary.email;
        json.sender = emailObj.sender;
        json.subject = 'Olá '+missionary.exibitionName+'!! Você recebeu um email de: '+emailObj.senderName;
        json.content = content;

        json.token = '5732312192909312.auth.Wv8OvzbzSPFBqKrg2Relg9';
        var URL = 'http://sudmural.appspot.com/sendMissionaryEmail';
        $http.post(URL, json).then(
          function(response){
            $ionicLoading.hide();
            $cordovaDialogs.alert('Email enviado com sucesso.', 'Aviso', 'OK').then(
              function(){
                defer.resolve();
              },
              function(){
                defer.resolve();
              }
            );
          },
          function(error){
            defer.reject(error);
            $ionicLoading.hide();
          }
        );

      }

      return defer.promise;
    }

  }

});
