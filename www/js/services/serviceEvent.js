var app = angular.module('mobile');

app.service('serviceEvent', function($q, $http){

  return {

    loadEvent: function(filter){
      var defer = $q.defer();
      var URL = 'http://sudmural.appspot.com/clientLoadEvent?unityNumber=1&display='+filter;
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
