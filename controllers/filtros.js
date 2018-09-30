var app = angular.module("FiltersModule", []);
app.filter("removeHtml", function () {
	return function (texto) {
		return String(texto).replace(/<[^>]+>/gm, '');
	}
})
.controller("FiltersController", function ($scope) {
	//$scope.mi_html = "<p> Hola mundo </p>";
	$scope.mi_html = {};
	$scope.mi_html.title = "Titulo";
	$scope.mi_html.body = "Body";
	$scope.costo = 2;

});