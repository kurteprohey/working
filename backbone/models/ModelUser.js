var app = app || {};

var ModelUser = Backbone.Model.extend({
	defaults: {
		name: 'Serg',
		age: 20,
		job: 'Programmer'
	},
	validate: function (attrs) {
		if (attrs.age < 0 || attrs.age > 100) {
			return 'incorrect age';
		}
	}
});