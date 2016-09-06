var app = angular.module('mobile');

app.service('serviceColaboration', function($q, $cordovaEmailComposer){
    return {

      sendEmail : function(type){

        $cordovaEmailComposer.isAvailable().then(function() {
          console.log('Email ativo');
        }, function () {
          console.log('Email inativo');
        });

        var defer = $q.defer();
        var email = {};
        if(type=='suggestion'){
          email = {
            to: 'educa.appcentral@gmail.com',
            subject: 'Sugestões para o aplicativo Sud Mural',
            body: '',
            isHtml: false
          };
        }else if(type=='error'){
          email = {
            to: 'educa.appcentral@gmail.com',
            subject: 'Erros encontrados no aplicativo Sud Mural',
            body: '',
            isHtml: false
          };
        }
        $cordovaEmailComposer.open(email).then(
          function(){
            defer.resolve(true);
          },
          function(error){
            defer.reject(error);
          }
        );
        return defer.promise;
      }
    }

});
