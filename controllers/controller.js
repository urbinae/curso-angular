var app = angular.module("TodoList", ["LocalStorageModule"]);

app.controller("TodoController", function ($scope, localStorageService) {

	if (localStorageService.get("todo-list")) {
		$scope.todos = localStorageService.get("todo-list");
	} else {
		$scope.todos = [];
	}
	
	$scope.$watchCollection('todos', function (newValue, oldValue) {
		localStorageService.set("todo-list", $scope.todos);
	});	
	$scope.addTodo = function () {
		$scope.todos.push($scope.newTodo); 		
		$scope.newTodo = {};
 	};

 	$scope.clean = function () {
 		$scope.todos = [];
 	}
});