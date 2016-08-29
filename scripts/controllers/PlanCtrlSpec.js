describe('PlanCtrl', function(){
	
	beforeEach(module('liftOff'));
	
	var planFactory;
	beforeEach(module(function($provide){
		planFactory= {
			
			addPlan:function() {}
		};

		$provide.value('planFactory', planFactory);

	}));	

	var PlanCtrl;
	var scope;

	beforeEach(inject(function($rootScope, $controller, planFactory){
		scope = $rootScope.$new();
		mockPlanFactory= planFactory;
		spyOn(mockPlanFactory,'addPlan');
		PlanCtrl = $controller('PlanCtrl',{
			$scope: scope,
			planFactory: mockPlanFactory
		})
	}));

	it('should call addPlan on planFactory on calling addPlan', function(){
		scope.plan={
			name: "ABC",
			value: 73,
			startdate: "01/10/1992",
			enddate: "01/10/2062"
		};
		scope.addPlan();
		expect(planFactory.addPlan).toHaveBeenCalled();
	})
})