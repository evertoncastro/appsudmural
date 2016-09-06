var app = angular.module('mobile');

app.service('serviceBanner', function($q, $http){

    return {
        loadBannerList: function(){
            var defer = $q.defer();
            var URL = 'http://sudmural.appspot.com/clientLoadBanner';
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
