var express = require('express');
var app = express();
var request = require('request');

app.use(express.static(__dirname));

app.get('/api/expedia', function (req, res) {
	request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel' , function(err,response,body){
		if(err){throw err}
		var data = JSON.parse(body)
		res.json(data.offers.Hotel)
	})
});


app.listen(process.env.PORT || 3000);
console.log('Server now listening on port 3000');


