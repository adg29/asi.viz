<head>

<link type="text/css" href="js/jquery/css/jquery-ui-1.8.12.custom.css" rel="stylesheet" />
<script type="text/javascript" src="js/jquery/jquery-1.5.1.min.js"></script>
<script type="text/javascript" src="js/jquery/jquery-ui-1.8.12.custom.min.js"></script>

<script type="text/javascript" src="js/backbone/underscore.js"></script>
<script type="text/javascript" src="js/backbone/backbone.js"></script>


<script type="text/javascript" src="js/raphael/raphael.js"></script>
<script type="text/javascript" src="js/raphael/g.raphael.js"></script>
<script type="text/javascript" src="js/raphael/g.bar.js"></script>

<script type="text/javascript" src="js/asi_investment_graphs.js"></script>

<link rel="stylesheet" href="css/asi_ig.css" type="text/css" media="screen" charset="utf-8"> 

</head>

<body>
<div id="asi_app">
<div id="asi_returns_meta">
	<div id="asi_investors">
		<label>Appstart.it Investors</label>
		<input id="asi_investors_count" name="asi_investors_count" type="text"/>
	</div>
	<div id="asi_price">
		<label>Market App Price: $</label>
		<input id="asi_price_val" name="asi_price_val" type="text"/>
	</div>

	<div id="asi_investment">
		<label>My Investment: $</label>
		<input id="asi_investment_amount" name="asi_investment_amount" type="text"/>
		<br/>
		<label>My Potential Return: $</label>
		<input id="asi_net" name="asi_net" type="text"/>
	</div>
</div>
<div id="asi_returns_bar">
	<div id="asi_returns">
		<div id="asi_returns_bar"></div>
	</div>
	<div id="asi_dl">
		<label>Market Downloads:</label>
		<div id="asi_dl_slider"></div>
		<input id="asi_dl_total" name="asi_dl_total" type="text"/>
	</div>
</div>
</div>
</body>
