angular.module('liftOff')
.factory('planFactory',function(){
	var obj= {
		plans:[]
	};	

	obj.addPlan= function(plan){
		if(obj.plans.length > 0){
			obj.removePlans();
		}
		obj.plans.push(plan);
	};

	obj.getPlans= function(){
		console.log(obj.plans);
		return obj.plans;
	};

	obj.removePlans= function(){
		while(obj.plans.length > 0){
			obj.plans.pop();
		}	
	};

	return obj;
})