var app = angular.module("PostsList", []);

app.controller("PostsController", ["$scope", "$http", function(scope, http){

	scope.posts = [];
	scope.loading = true;
	//scope.noresult = "";
	http.get("http://jsonplaceholder.typicode.com/posts")
	.success(function (data) {
		console.log(data);
		scope.posts = data;
		scope.loading = false;
	})
	.error(function (error) {
		scope.loading = false;
		scope.noresult = "No se encontraron resultados";
		console.log(error);
	});
	
}]);