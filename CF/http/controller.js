var app = angular.module("MyFirstApp", []);

app.controller("FirstController",['$scope','$log','$http',function($scope,$log,$http){
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
        if($scope.artist != ''){
            $http({
                method: 'GET',
                url: 'https://api.spotify.com/v1/search?q=' + $scope.artist + '&type=artist'
            }).then(function successCallback(response){
                console.log(response.data);
                var result = response.data; 
                $scope.imgUrlAvatar = result.artists.items[0].images[2];
                var id = result.artists.items[0].id;

                /**/

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
    }

}]);



//{"artists":
//  {"href":"https://api.spotify.com/v1/search?query=aerosmith&offset=0&limit=20&type=artist",
//    "items":[{
//        "external_urls":{
//            "spotify":"https://open.spotify.com/artist/7Ey4PD4MYsKc5I2dolUwbH"},
//        "followers":{
//            "href":null,
//            "total":1291230},
//        "genres":[
//            "album rock",
//            "alternative rock",
//            "classic rock",
//            "hard rock",
//            "mellow gold",
//            "rock"],
//        "href":"https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH",
//        "id":"7Ey4PD4MYsKc5I2dolUwbH",
//        "images":[{
//            "height":665,
//            "url":"https://i.scdn.co/image/fcb6ff3b92a1412e225c69277744e33105af963f",
//            "width":999
//        },{
//            "height":426,
//                   "url":"https://i.scdn.co/image/5ae31d3b25b21b5c7a095a5dfe3af987dd190403",
//                   "width":640
//        },{
//                       "height":133,
//                   "url":"https://i.scdn.co/image/81442527ebb3ff17f86fde87f75f96fd80a5d97c",
//                   "width":200
//        },{
//            "height":43,
//                   "url":"https://i.scdn.co/image/5986e94a69a8a6cf9fcc5a88fbfa90954f22bc78",
//                   "width":64}],
//        "name":"Aerosmith",
//        "popularity":76,
//        "type":"artist",
//        "uri":"spotify:artist:7Ey4PD4MYsKc5I2dolUwbH"},
//             {"external_urls":
//              {"spotify":"https://open.spotify.com/artist/0zYiud3Pjgu43pfQCnyNHV"},
//              "followers":
//              {"href":null,
//               "total":920},
//              "genres":[],
//              "href":"https://api.spotify.com/v1/artists/0zYiud3Pjgu43pfQCnyNHV",
//              "id":"0zYiud3Pjgu43pfQCnyNHV",
//              "images":[],
//              "name":"Aerosmith With Kid Rock",
//              "popularity":12,
//              "type":"artist",
//              "uri":"spotify:artist:0zYiud3Pjgu43pfQCnyNHV"},
//             {"external_urls":
//              {"spotify":"https://open.spotify.com/artist/5LK5rmha1fkhsxXFlsdbFc"},
//              "followers":
//              {"href":null,
//               "total":23},
//              "genres":[],
//              "href":"https://api.spotify.com/v1/artists/5LK5rmha1fkhsxXFlsdbFc",
//              "id":"5LK5rmha1fkhsxXFlsdbFc",
//              "images":[],
//              "name":"Jimmy Crespo of Aerosmith",
//              "popularity":1,
//              "type":"artist",
//              "uri":"spotify:artist:5LK5rmha1fkhsxXFlsdbFc"},
//             {"external_urls":
//              {"spotify":"https://open.spotify.com/artist/6uG2CaQ3Tdzap64WBdgeac"},
//              "followers":
//              {"href":null,
//               "total":266},
//              "genres":[],
//              "href":"https://api.spotify.com/v1/artists/6uG2CaQ3Tdzap64WBdgeac",
//              "id":"6uG2CaQ3Tdzap64WBdgeac",
//              "images":[],
//              "name":"Aerosmith featuring Sierra Leone's Refugee All Stars",
//              "popularity":11,
//              "type":"artist",
//              "uri":"spotify:artist:6uG2CaQ3Tdzap64WBdgeac"},
//             {"external_urls":
//              {"spotify":"https://open.spotify.com/artist/1CfSCZ1PnGUOk0dW5qGYIk"},
//              "followers":
//              {"href":null,
//               "total":24},
//              "genres":[],
//              "href":"https://api.spotify.com/v1/artists/1CfSCZ1PnGUOk0dW5qGYIk",
//              "id":"1CfSCZ1PnGUOk0dW5qGYIk",
//              "images":[],
//              "name":"Karaoke - Aerosmith",
//              "popularity":4,
//              "type":"artist",
//              "uri":"spotify:artist:1CfSCZ1PnGUOk0dW5qGYIk"},
//             {"external_urls":
//              {"spotify":"https://open.spotify.com/artist/53gbjlhb8ncmHOHGG0bKrE"},
//              "followers":
//              {"href":null,
//               "total":24},
//              "genres":[],
//              "href":"https://api.spotify.com/v1/artists/53gbjlhb8ncmHOHGG0bKrE",
//              "id":"53gbjlhb8ncmHOHGG0bKrE",
//              "images":[],
//              "name":"Aerosmith Rocks!",
//              "popularity":0,
//              "type":"artist",
//              "uri":"spotify:artist:53gbjlhb8ncmHOHGG0bKrE"},
//             {"external_urls":
//              {"spotify":"https://open.spotify.com/artist/6A4BfdVTXTQks5FiNVx1H7"},
//              "followers":
//              {"href":null,
//               "total":27},
//              "genres":[],
//              "href":"https://api.spotify.com/v1/artists/6A4BfdVTXTQks5FiNVx1H7",
//              "id":"6A4BfdVTXTQks5FiNVx1H7",
//              "images":[],
//              "name":"Aerosmith Tribute Band",
//              "popularity":9,
//              "type":"artist",
//              "uri":"spotify:artist:6A4BfdVTXTQks5FiNVx1H7"}],
//        "limit":20,
//            "next":null,
//                "offset":0,
//                    "previous":null,
//                        "total":7}}

