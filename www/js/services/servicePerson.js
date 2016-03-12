var app = angular.module('mobile');

app.service('servicePerson', function($q, $http){

  var message = undefined;

  return {

    getPerson: function(){
        return message;
    },

    setPerson: function(data){
        message = data;
    },

    loadPersonInfo: function(personUrl){
      var defer = $q.defer();
      var URL = 'http://sudmural.appspot.com/clientLoadPerson?personUrlSafe='+personUrl;
      $http.get(URL).then(
        function(response){
          defer.resolve(response.data);
        },
        function(error){
          defer.reject(error);
        }
      );
      return defer.promise;
    }

  }

});
