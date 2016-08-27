angular.module('liftOff')
.controller('PlanCtrl',['$scope','planFactory', function($scope,planFactory) {
	
	$scope.addPlan= function(){
		planFactory.addPlan($scope.plan);		
	}
}])