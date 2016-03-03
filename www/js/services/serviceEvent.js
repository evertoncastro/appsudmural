var app = angular.module('mobile');

app.service('serviceEvent', function($q, $http){

  return {

    loadEvent: function(){
      var defer = $q.defer();
      var URL = 'http://sudmural.appspot.com/clientLoadEvent?unityNumber=1';
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
