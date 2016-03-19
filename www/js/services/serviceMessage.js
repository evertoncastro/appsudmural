var app = angular.module('mobile');

app.service('serviceMessage', function($q, $http){

  var message = undefined;

  return {

    getMessage: function(){
        return message;
    },

    setMessage: function(data){
        message = data;
    },

    loadMessage: function(filter){ //filter empty loads all messages
      var defer = $q.defer();
      var URL = 'http://sudmural.appspot.com/clientLoadMessage?unityNumber=1&display='+filter;
      $http.get(URL).then(
        function(response){
          defer.resolve(response);
        },
        function(error){
          defer.reject(error);
        }
      );
      return defer.promise;
    }

  }

});
