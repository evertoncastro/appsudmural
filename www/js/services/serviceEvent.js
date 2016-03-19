var app = angular.module('mobile');

app.service('serviceEvent', function($q, $http){
    var eventInfo;
    return {
        setEventInfo: function(event){
            eventInfo = event;
        },
        getEventInfo: function(){
            return eventInfo;
        },
        loadEvent: function(filter){ //filter empty loads all events
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
