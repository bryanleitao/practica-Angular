var app = angular.module("MyApp",["LocalStorageModule"]);

app.controller("MyAppController",function($scope,localStorageService){

    //verifica q no haya nada guardado
    //"angular-todolist" es donde se va a guardar la lista
    if(localStorageService.get("angular-todolist")){ 
        $scope.todo = localStorageService.get("angular-todolist");
    }else{
        $scope.todo=[];
    }

    $scope.$watchCollection('todo',function(newValue,oldValue){
        localStorageService.set("angular-todolist",$scope.todo);
    });

    $scope.addActv = function (){
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};
    }

});