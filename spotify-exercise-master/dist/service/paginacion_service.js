var app = angular.module("spotifyzier");
app.factory('spotifyService', function($http) {

    var service = {};

    const urlComment ='/comments/';
    const GET = 'GET'

    service.getArtist = function(album){
        return $http({
            method: GET,
            url: '/search?q=' + album
        });
    };
    service.getAlbums = function(id){
        return $http({
            method: GET,
            url: '/album/' + id
        });
    };
    service.getComments = function(id) {
        return $http({
            method: GET,
            url: urlComment + id
        });
    }

    service.createComments = function(cmt) {
        return $http.post(urlComment,cmt);

    }
    return service;
});
