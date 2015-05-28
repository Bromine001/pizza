import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('pizza');
	},

	actions: {
		delete: function(pizza) {
			var _this = this;
			
			pizza.destroyRecord().then(function() {
				_this.transitionTo('pizzas');
			});
		}
	}
});
