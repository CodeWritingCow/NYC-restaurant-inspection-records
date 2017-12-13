const express 		= require('express');
const app 			= express();
const morgan 		= require('morgan'); // morgan is a HTTP request logger middleware
const request 		= require('request'); // request makes HTTP calls
const bodyParser 	= require('body-parser'); // adds body object to request so app can access POST parameters

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// log all HTTP requests in the console
app.use(morgan('dev'));

app.use(express.static(__dirname));

const port = process.env.PORT || 8080;
const token = process.env.TOKEN;

// SET THE ROUTES
// =======================================
// "req, res" stand for "request, response."

app.get('/', (req, res) => {
	request('https://data.cityofnewyork.us/resource/43nn-pn8j.json?boro=queens', (error, response, body) =>{
		if (!error && response.statusCode === 200) {
			res.send(body);
		} else {
			return error;
		}
	});
});

app.get('/chinese', (req, res) => {
	request('https://data.cityofnewyork.us/resource/43nn-pn8j.json?cuisine_description=chinese', (error, response, body) =>{
		if (!error && response.statusCode === 200) {
			res.send(body);
		} else {
			return error;
		}
	});
});

app.get('/flushing', (req, res) => {
	request('https://data.cityofnewyork.us/resource/43nn-pn8j.json?zipcode=11358', (error, response, body) => {
		if (!error && response.statusCode === 200) {
			res.send(body);
		} else {
			return error;
		}
	});
});

app.get('/zipcode/:id', (req, res) => {
	request(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?zipcode=${req.params.id}`, (error, response, body) => {
		if (req.params.id.length !== 5) {
			return res.send(`ERROR: Zip code should have 5 digits. You put in ${req.params.id.length}`);
		}
		if (JSON.parse(body).length === 0) {
			return res.send('Nothing was found. Please make sure you are using a New York City ZIP code.');
		}
		if (!error && response.statusCode === 200) {
			res.send(body);
		} else {
			return error;
		}
	});
});

// Start server
app.listen(port, () => {
	console.log(`App is running on http://localhost: ${port}`);
});