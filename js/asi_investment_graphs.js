$(function(){
	window.asi_investment_model = Backbone.Model.extend({
		money: 10000,
		investors: 20,
		price: 1.99,
		downloads: 10000,

		rev_share_investor : .45,
		rev_share_dev: .2,
		rev_share_platform: .3,
		rev_share_asi: .05,

		rev_net_investor: 0,
		rev_net_dev: 0

	});

	window.asi_investment_graph_bar = Backbone.View.extend({
		el: $('#asi_ig_bar'),
		asi_igb_graph: {},

		events: {
		},

		initialize: function(){
			_.bindAll( this, 'render' );

			this.model = new asi_investment_model;
			this.asi_ig_r = Raphael("asi_ig_bar",0, 00, 640, 480);

			this.model.bind('change', this.render );
			this.model.view = this;

			var instance = this;

			$( "#asi_ig_slider" ).slider({
				range: "min",
				value: 20,
				min: 0,
				max: 50,
				slide: function( event, ui ) {
					console.log('slide',ui.value);
					instance.model.set({downloads: ui.value});
				}
			});


			this.asi_igb_graph = this.asi_ig_r.g.barchart(30,30,300,300,[[5,60]], {stacked:false});


		},

		render: function(){
			console.log('rendering');

			var instance = this;
			console.log( this );


			console.log( this.model.get('downloads'),'getdownloads' );
			this.asi_igb_graph.remove();
			this.asi_igb_graph = this.asi_ig_r.g.barchart(30,30,300,300,[[this.model.get('downloads'),60 ]], {stacked:false});

		}



	});

	window.asi_ig_bar = new asi_investment_graph_bar;
});
