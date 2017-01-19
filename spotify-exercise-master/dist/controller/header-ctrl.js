var app = angular.module("spotifyzier");

app.controller("headerCtrl",['$rootScope','$scope','$log','$http','spotifyService','headerFactory',function($rootScope, $scope,$log,$http,spotifyService,headerFactory){
    $scope.searchArtist = () => {
        if($scope.search_artist !== ''){
            spotifyService.getArtist($scope.search_artist)
                .then(function successCallback(response){
                headerFactory.setAlbum(response.data);
                $rootScope.$broadcast("newAlbum");
                /**/
            }, function errorCallback(response){
                /*motras mensaje en caso de que no encuentre el artista*/
            })
        }else{
            headerFactory.setAlbum(null);
            $rootScope.$broadcast("newAlbum");
        }
    }

}]);
