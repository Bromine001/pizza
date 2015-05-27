import DS from 'ember-data';

export default DS.Model.extend({
  tableFull: DS.attr('boolean')
}).reopenClass({
	FIXTURES:
	[
		{
			id: 1,
			tableFull: false
		},
		{
			id: 2,
			tableFull: false
		},
		{
			id: 3,
			tableFull: false
		},
		{
			id: 4,
			tableFull: true
		},
	]


})
