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

	window.asi_investment_bar_view = Backbone.View.extend({
		el: $('#asi_returns_bar'),
		graph: {},
		r: {},

		events: {
		},

		initialize: function(){
			_.bindAll( this, 'render' );

			this.model = new asi_investment_model;
			this.r = Raphael("asi_returns_bar",0, 00, 640, 480);

			this.model.bind('change', this.render );
			this.model.view = this;

			var instance = this;

			$('#asi_investors_count').val('20');
			$('#asi_investment_amount').val('500');
			$('#asi_price_val').val('1.99');
			$('#asi_net').val( (($('#asi_price_val').val()*$('#asi_dl_total').val()*.45)/$('#asi_investors_count').val()-$('#asi_investment_amount').val()).toFixed(2) );


			$( "#asi_dl_slider" ).slider({
				range: "min",
				value: 500,
				max: 50000,
				slide: function( event, ui ) {
					instance.model.set({downloads: ui.value});
				}
			});


			this.graph = this.r.g.barchart(30,30,100,300,
					[[ $('#asi_net').val() ]], 
					{
						stacked:false,
						to: 50000

					}
				);

			this.model.set({downloads: 500});


		},

		render: function(){
			var instance = this;

			var downloads = this.model.get('downloads');
			console.log( downloads );
			$('#asi_dl_total').val(downloads);
			var returns_net = ( ($('#asi_price_val').val()*$('#asi_dl_total').val()*.45)/$('#asi_investors_count').val()-$('#asi_investment_amount').val() ).toFixed(2);
			$('#asi_net').val( returns_net );

			this.graph.remove();
			this.graph = this.r.g.barchart(30,30,100,300,
				[[this.model.get('downloads') ]], 
				{
					stacked:false,
					to: 50000,
				});

		}



	});

	window.asi_investment_bar = new asi_investment_bar_view;
});
