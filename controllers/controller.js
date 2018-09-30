var app = angular.module("TodoList", ["LocalStorageModule"]);

app.controller("TodoController", function ($scope, localStorageService) {

	if (localStorageService.get("todo-list")) {
		$scope.todos = localStorageService.get("todo-list");
	} else {
		$scope.todos = [];
	}
	//$scope.newTodo = {};
	$scope.addTodo = function () {
		$scope.todos.push($scope.newTodo); 		
		$scope.newTodo = {};
		localStorageService.set("todo-list", $scope.todos);
 	};

 	$scope.clean = function () {
 		$scope.todos = [];
 		localStorageService.set("todo-list", $scope.todos);	
 	}
});