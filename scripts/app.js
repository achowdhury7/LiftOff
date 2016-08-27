
angular.module('liftOff',['ui.router','chart.js'])

.config(['$stateProvider','$urlRouterProvider','ChartJsProvider', function($stateProvider, $urlRouterProvider,ChartJsProvider) {
	$stateProvider
	.state('plan', {
		url: '/plan',
		templateUrl: '/plan.html',
		controller: 'PlanCtrl'
	})

	.state('report', {
		url: '/report',
		templateUrl: '/report.html',
		controller: 'ReportCtrl'
	});

	$urlRouterProvider.otherwise('plan');	

	ChartJsProvider.setOptions({
      chartColors: ['#ff9850', '#FF8A80'],
      legend:{
      	display:true,      	
      	fullWidth:true,
      	labels:{
      		boxWidth:10      		
      		
      	}
      }
  	});
}])