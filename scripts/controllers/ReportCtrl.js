angular.module('liftOff')
.controller('ReportCtrl',['$scope','planFactory',function($scope,planFactory) {
	var self= this;
	$scope.plans = planFactory.getPlans();
	if($scope.plans.length > 0){
		self.value = $scope.plans[0].value;
		self.rest = (100-self.value);
		console.log(self.value, self.rest);
	}	
	$scope.data = [];
	$scope.labels = [];
	$scope.data.push(self.value);
	$scope.labels.push('value');
	$scope.data.push(self.rest);
	$scope.labels.push('rest');

}])