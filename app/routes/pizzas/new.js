import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('pizza');
	},
	
	 deactivate: function() {
	 	var model = this.modelFor('pizzas/new');
	 	if (model.get('isNew')) {
	 		model.destroyRecord();
	 	}
	 },


	 actions: {
	 	save: function() {
	 			var _this = this;
	 			var model = this.modelFor('pizzas/new');
	 			
	 			model.save().then(function() {
	 				_this.transitionTo('pizzas');
	 			});

	 		return false;
	 	},
		
		cancel: function() {
			console.log('cancel called from app/routes/pizzas/new');
	 		this.transitionTo('pizzas');
	 		//return false;
	 	}
	 }
});
