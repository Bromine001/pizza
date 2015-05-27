import Ember from 'ember';

export default Ember.Route.extend({
	// model: function() {
	// 	return this.store.find('table');
	//},

	actions: {
		reserve: function(table) {
			var _this = this;

			console.log ("reserve called from app/routes/tables/table.js");
			//this.get('model').this.set(tableFull, true);
		},
		


	}
});
