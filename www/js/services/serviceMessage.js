var app = angular.module('mobile');

app.service('serviceMessage', function($q, $http){

  return {

    loadMessage: function(filter){
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
