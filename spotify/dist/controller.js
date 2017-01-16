var app = angular.module("spotify-exercise", []);

app.controller("spotifyzier",['$scope','$log','$http',function($scope,$log,$http){
    $scope.posts = {};
    //    $http({
    //        method: 'GET',
    //        url: 'http://jsonplaceholder.typicode.com/posts'
    //    }).then(function successCallback(response){
    //        console.log(response.data);
    //        $scope.posts = response.data;
    //    }, function errorCallback(response){
    //
    //    })

    $scope.searchArtist = function(){
        $http({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search?q=' + $scope.search_artist + '&type=artist'
        }).then(function successCallback(response){
            console.log(response.data);
            var result = response.data; 
            $scope.result = result;
            $scope.imgUrlAvatar = result.artists.items[0].images[2];
            var id = result.artists.items[0].id;

            /*busca el id del artista*/

            $http({
                method: 'GET',
                url: 'https://api.spotify.com/v1/artists/' + id + '/albums'
            }).then(function successCallback(response){
                $scope.albums = response.data.items;

            }, function errorCallback(response){

            })

            /**/

        }, function errorCallback(response){

        })
    }

}]);