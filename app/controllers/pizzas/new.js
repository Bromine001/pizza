import Ember from 'ember';

export default Ember.Controller.extend({
	table: ['takeout', 'table 1', 'table 2', 'table 3', 'table 4'],
	//tableSelect: 'takeout',
	size: ['small', 'medium', 'large', 'X-large'],
	//sizeSelect: 'small'
	toppings: ['Bees', 'Beans', 'Grape Jelly', 'Pepperoni', 'Chairs', 'No topping'],

});
