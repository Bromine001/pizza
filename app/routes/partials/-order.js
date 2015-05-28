import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var table = table.id
		return this.store.find('pizza', table);
	},
});
