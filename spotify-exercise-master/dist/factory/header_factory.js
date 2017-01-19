var app = angular.module("spotifyzier");
app.factory('headerFactory', function($http) {

    var factory = {};
    var albums;
    factory.getAlbums = function(){
        return albums;
    };
    factory.setAlbum = function(newAlbum){
        albums = newAlbum;
    };

    return factory;
});
