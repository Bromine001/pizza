import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		cancel: function() {
			console.log('cancel called form app/controllers/pizza');
			this.transitionToRoute('pizza');
			return false;
		}
	}
});
