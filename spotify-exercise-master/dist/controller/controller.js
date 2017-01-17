var app = angular.module("spotifyzier");

app.controller("spotifyzierCtrl",['$scope','$log','$http','spotifyService',function($scope,$log,$http,spotifyService){
    $scope.showComments = false;     
    const comment = {
        albumId: "2guirTSEqLizK7j9i1MTTZ",
        email: "nahuel.veron@lateralview.net",
        text: "test",
    }
    
    //spotifyService.createComments("2guirTSEqLizK7j9i1MTTZ",comment);
    
    $scope.searchArtist = () => {
        if($scope.search_artist !== ''){  
            spotifyService.getArtist($scope.search_artist)
                .then(function successCallback(response){
                    console.log(response.data);
                    var result = response.data; 
                    $scope.result = result;
                /**/
                }, function errorCallback(response){
                    /*motras mensaje en caso de que no encuentre el artista*/
                })
        }else{
            $scope.result = null;
        }
    }
    $scope.changeComments = () => {
        $scope.showComments = !$scope.showComments
    }
    $scope.getComments = (id) => {
        spotifyService.getComments(id).then((data) => {
            $scope.comments = data.data;
            console.log(data.data);
        }); 
    }

}]);