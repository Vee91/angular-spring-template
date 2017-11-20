define(['app'], function (app) {
    app.factory('HomeService', function ($http) {
        var factory = {
        		welcome: welcome,
        };

        function welcome() {
        	//var result = $http.post( '/plagiarismrest/rest/welcome/?cd=' + (new Date()).getTime(), 2);
        	return $http.post( '/plagiarismrest/rest/welcome/?cd=' + (new Date()).getTime(), 2).
        		then(function(response){
        			return response.data;
       	         })
        }

        return factory;
    });
});