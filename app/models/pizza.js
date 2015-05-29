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
			table: 'No one', 
			topping1: 'This is where pizza',
			topping2: 'orders will go',
			topping3: 'press "done"',
			topping4: 'to clear this example'
		},
	]
});