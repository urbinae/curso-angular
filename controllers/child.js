var app = angular.module("ChildModule", []);

app
.run(function ($rootScope) {
	$rootScope.nombre = "Abuelo";
})
.controller("FatherController", ["$scope", function(scope){
	scope.nombre = "Padre";
	setTimeout(function () {
		scope.$apply(function () {
			scope.nombre = "Intruzo"
		})
	}, 2000);
}])
.controller("ChildController", function ($scope) {
	$scope.nombre = "hijo";
});