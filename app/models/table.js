import DS from 'ember-data';

export default DS.Model.extend({
  tableFull: DS.attr('boolean'),
  tops: DS.attr('string'),
  notes: DS.attr('string'),
  pic: DS.attr('string'),

}).reopenClass({
	FIXTURES:
	[
		{
			id: 1,
			tops: '4',
			tableFull: false,
			notes: 'Our most discerning table. Perched between the bathrooms and the kitchen, it gets a lot of attention from our wait staff. It is seriously busy at this table. It is like Grand Central Station. You will probably not want to plan on any dinner conversation.',
			pic: 'table1.jpg'
		},
		{
			id: 2,
			tops: '2',
			tableFull: false,
			notes: 'Our most romantic table. Set in the front window, this table is avalible for romantic couples only. If you are not a romantic couple, you will be held back by the velvet rope at the entrance to this table. We apologize for any inconvenience.',
			pic: 'table2.jpg'
		},
		{
			id: 3,
			tops: '4',
			tableFull: false,
			notes: 'Table 3 is a table. There is nothing special about table 3. No one has ever been murdered while sitting at table 3. The stain on the carpet under table 3 is from pizza sauce. Honest. No one has ever dissappeared the same night that they ate here.', 
			pic: 'table3.jpeg'
		},
		{
			id: 4,
			tops: '6',
			tableFull: true,
			notes: 'Our largest table. Table 3 can be pushed against table 4 to make one larger table. That would require a seriously lot of people. Like your baseball team after you win a game. That would be a great time to go get a pizza, actually. Come eat pizza here.',
			pic: 'table4.jpeg'
		},
	]


})
