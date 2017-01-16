var app = angular.module("MyApp",["LocalStorageModule"]);

app.service("ToDoService",function(localStorageService){

    this.key = "angular-todolist";

    if(localStorageService.get(this.key)){ 
        this.activities = localStorageService.get(this.key);
    }else{
        this.activities = [];
    }

    this.add = function(newActv){
        this.activities.push(newActv);
        console.log("newActv");
    };

    this.updaLocalStoage = function(){
        localStorageService.set(this.key, this.activities);
    };

    this.clean = function(){
        this.activities = [];
        this.updaLocalStoage();
    };

    this.getAll = function(){
        return this.activities;
    };

    this.removeItem = function(item){
        this.activities = this.activities.filter(function(activity){
            return activity !== item;
        });
        this.updaLocalStoage();
        return this.getAll();
    };

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