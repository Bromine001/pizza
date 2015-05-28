import DS from 'ember-data';
//import Ember from "ember";

export default DS.Model.extend({
  size: DS.attr('string'),
  table: DS.belongsTo('table', {async: true }),
  toppings: DS.attr('string')
}).reopenClass({
FIXTURES:
	[
		{
			id: 1,
			size: 'Example',
			table: 'NONE', 
			toppings: 'This is where pizza orders will go'
		},
	]
});