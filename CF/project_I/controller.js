//var app = angular.module("MyFirstApp", []);
//
//app.controller("FirstController", function($scope){
//    
//    $scope.nuevoComentario = {};
//    
//    $scope.comentarios = [{
//        comentario: "Bueno blabla",
//        username: "cf"
//    },{
//        comentario: "Bueno blabla 2 blabla",
//        username: "cf2"
//    }];
//    
//    $scope.addComment = function(){
//        $scope.comentarios.push($scope.nuevoComentario);
////        $scope.nuevoComentario = {};
//    }
//});

var app = angular.module("MyFirstApp", []);

app.controller("FirstController", ["$scope","$http", function(m){
    
    m.nuevoComentario = {};
    
    m.comentarios = [{
        comentario: "Bueno blabla",
        username: "cf"
    },{
        comentario: "Bueno blabla 2 blabla",
        username: "cf2"
    }];
    
    m.addComment = function(){
        m.comentarios.push(m.nuevoComentario);
        m.nuevoComentario = {};
    }
}]);