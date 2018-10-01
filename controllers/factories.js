var app = angular.module("TodoList", ["LocalStorageModule"]);

app
.factory('TodoService', function (localStorageService) {
	var todoService = {};
	todoService.key = "todo-list";
	if (localStorageService.get(todoService.key)) {
		todoService.todos = localStorageService.get(todoService.key);
	} else {
		todoService.todos = [];
	}
	todoService.addTodo = function (newTodo) {
		todoService.todos.push(newTodo); 		
		todoService.updateStorage();
 	};

 	todoService.updateStorage = function () {
 		localStorageService.set(todoService.key, todoService.todos);
 	};
 	todoService.clean = function () {
 		todoService.todos = [];
 		todoService.updateStorage();
 	};
 	todoService.getAll = function () {
 		return todoService.todos;
 	};
 	todoService.removeItem = function (item) {
 		todoService.todos = todoService.todos.filter(function (todo) {
 			return todo !== item;
 		});
 		todoService.updateStorage();
 		return todoService.todos;
 	}
	
	return todoService;
})
.controller("TodoController", function ($scope, TodoService) {
	console.log(TodoService);
	$scope.todos = TodoService.getAll();
	$scope.newTodo={}
	$scope.addTodo = function () {
		TodoService.addTodo($scope.newTodo);
		$scope.newTodo={}
	}
	$scope.removeItem = function (todo) {
		$scope.todos = TodoService.removeItem(todo);
	}
	$scope.clean = function () {
		TodoService.clean();
		$scope.todos = TodoService.getAll();
	}

});