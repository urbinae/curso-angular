var app = angular.module("ApplyModule", []);
app.controller("ApplyController", function  ($scope) {
	$scope.nombre = "Eimar";
	/*setTimeout(function () {
		$scope.$apply(function () {
			$scope.nombre = "Alejandro";
			console.log($scope.nombre);
		});
	}, 2000);*/
	document.querySelector("#mi_button").addEventListener("click", function () {
		$scope.$apply(function () {
			$scope.nombre = "Alejandro";
			console.log($scope.nombre);
		});
	});	

	$scope.cambiar = function () {
		$scope.nombre = 'Urbina';
		console.log($scope.nombre);		
	}
});