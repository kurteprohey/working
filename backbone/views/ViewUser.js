var ViewUser = Backbone.View.extend({
	initialize: function () {
		this.template = _.template($("#user").html());
		this.listenTo(this.model, "change", "render");
	},
	render: function () {

		var json = this.model.toJSON(),
			view = this.template(json);
		$('.preview').html(view);
	}
});