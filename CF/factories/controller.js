var app = angular.module("MyApp",["LocalStorageModule"]);

app.factory("ToDoService",function(localStorageService){
    var toDoService = {};

    toDoService.key = "angular-todolist";

    if(localStorageService.get(toDoService.key)){ 
        toDoService.activities = localStorageService.get(toDoService.key);
    }else{
        toDoService.activities = [];
    }

    toDoService.add = function(newActv){
        toDoService.activities.push(newActv);
        console.log("newActv");
    };

    toDoService.updaLocalStoage = function(){
        localStorageService.set(toDoService.key, toDoService.activities);
    };

    toDoService.clean = function(){
        toDoService.activities = [];
        toDoService.updaLocalStoage();
    };

    toDoService.getAll = function(){
        return toDoService.activities;
    };

    toDoService.removeItem = function(item){
        toDoService.activities = toDoService.activities.filter(function(activity){
            return activity !== item;
        });
        toDoService.updaLocalStoage();
        return toDoService.getAll();
    };

    return toDoService;
});

app.controller("MyAppController",function($scope,ToDoService){
    $scope.todo = ToDoService.getAll();
    
    $scope.newActv = {};
    
    $scope.addActv = function (){
        ToDoService.add($scope.newActv);
        $scope.newActv = {};
    };
    
    $scope.removeActv = function (){
        $scope.todo = ToDoService.removeItem(item);
    };

    $scope.clean = function(){
        $scope.todo = ToDoService.clean();
    };

});