var app = angular.module("spotifyzier");
app.factory('spotifyService', function($http) {
   var service = {};
    service.getArtist = function(album){
   		return $http({
   			method: 'GET',
   			url: '/search?q='+album
         });
   };
   service.getAlbums = function(id){
         return $http({
            method: 'GET',
            url: '/album/'+id
         });
   };
   service.getComments = function(id) {
       return $http({
            method: 'GET',
            url: '/comments/'+id
         });
   }
//   service.createComments = function(albumId, cmt) {
//        $http.post({
//            method: 'POST',
//            url: '/comments/'+albumId+cmt
//         });
//   }
   
   service.createComments = function(albumId, cmt) {
      const urlComment ='/comments/';
      return $http.post(urlComment,cmt);
      
   }
   return service;
});
