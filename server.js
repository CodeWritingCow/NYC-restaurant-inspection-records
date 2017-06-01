var express = require('express'),
	app = express(),
	morgan = require('morgan'), // morgan is a HTTP request logger middleware
	request = require('request'), // request makes HTTP calls
	bodyParser = require('body-parser'); // adds body object to request so app can access POST parameters

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// log all HTTP requests in the console
app.use(morgan('dev'));

app.use(express.static(__dirname));

var port = process.env.PORT || 8080;
var token = process.env.TOKEN;

// SET THE ROUTES
// =======================================
// "req, res" stand for "request, response."

app.get('/', function(req, res) {
	request('https://data.cityofnewyork.us/resource/43nn-pn8j.json?boro=queens', function(error, response, body){
		if (!error && response.statusCode === 200) {
			res.send(body);
		} else {
			return error;
		}
	});
});

app.get('/chinese', function(req, res) {
	request('https://data.cityofnewyork.us/resource/43nn-pn8j.json?cuisine_description=chinese', function(error, response, body){
		if (!error && response.statusCode === 200) {
			res.send(body);
		} else {
			return error;
		}
	});
});

app.get('/flushing', function(req, res) {
	request('https://data.cityofnewyork.us/resource/43nn-pn8j.json?zipcode=11358', function(error, response, body){
		if (!error && response.statusCode === 200) {
			res.send(body);
		} else {
			return error;
		}
	});
});


// Start server
app.listen(port, function(){
	console.log('App is running on http://localhost:' + port);
});