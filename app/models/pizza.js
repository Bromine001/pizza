import DS from 'ember-data';
//import Ember from "ember";

export default DS.Model.extend({
  size: DS.attr('string'),
  table: DS.attr('string'),
  topping1: DS.attr('string', {default: 'No Topping'}),
  topping2: DS.attr('string'),
  topping3: DS.attr('string'),
  topping4: DS.attr('string'),
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