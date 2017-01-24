var app = angular.module("spotifyzier");

app.controller
("spotifyzierCtrl",
 ['$rootScope',
  '$scope',
  '$log',
  '$http',
  'spotifyService',
  'headerFactory',
  function($rootScope, $scope, $log, $http, spotifyService, headerFactory) {

      resetScopes = ()=>{
          $scope.show = {};
          $scope.show.comments = false;
          $scope.show.buttonComments = false;
          $scope.show.boxComments = false;
          $scope.form = {};
      }

      resetScopes();

      $scope.$on("newAlbum", ()=>{
          resetScopes();
          $scope.result = headerFactory.getAlbums();
      });

      $scope.changeComments = (id) => {
          $scope.show.comments = !$scope.show.comments;
          $scope.show.albumId = id;
          $scope.show.buttonComments = !$scope.show.buttonComments;
          $scope.show.boxComments = false;
      }

      $scope.createComments = (id) => {
          let comment = {};
          comment.albumId = id;
          comment.email = $scope.form.email;
          comment.text = $scope.form.text;

          if(comment.text && comment.email){
              spotifyService.createComments(comment)
                  .then(function successCallback(response){
                  console.log("hola");
                  $scope.getComments(id);
                  $scope.form.alert = "";
                  $scope.form.email = "";
                  $scope.form.text = "";
                  /**/
              }, function errorCallback(response){
                  console.log("no");
                  /*motras mensaje en caso de que no encuentre el artista*/
              })
          }else{
              $scope.form.alert = "Ingrese todos los campos como corresponde";
              console.log("pone el mail y/o el texto");
          }

      }

      $scope.getComments = (id) => {
          spotifyService.getComments(id).then((data) => {
              $scope.comments = data.data;
              console.log(data.data);
          });
      }

  }]);
