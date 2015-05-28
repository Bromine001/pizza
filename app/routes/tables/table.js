import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		reserve: function(table) {
			var _this = this;

			console.log ("reserve called from app/routes/tables/table.js");

		},
		


	}
});
