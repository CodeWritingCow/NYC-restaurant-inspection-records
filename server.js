const express 		= require('express');
const app 			= express();
const hbs			= require('hbs');
const morgan 		= require('morgan'); // morgan is a HTTP request logger middleware
const request 		= require('request'); // request makes HTTP calls
const bodyParser 	= require('body-parser'); // adds body object to request so app can access POST parameters
const querystring 	= require('querystring');
const _ 			= require('lodash');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// log all HTTP requests in the console
app.use(morgan('dev'));

app.use(express.static(__dirname));

const port = process.env.PORT || 8080;
const token = process.env.API_TOKEN || require('./token');

const url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json';
const socrataUrl = 'https://data.cityofnewyork.us/resource/9w7m-hzhe.json'; // This URL allows Socrata SoQL functions as parameters

// SET ROUTES
// =======================================

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'NYC Restaurant Inspector'
	});

	// request(`${url}?boro=queens`, (error, response, body) =>{
	// 	if (!error && response.statusCode === 200) {
	// 		res.render('home.hbs', {
	// 			pageTitle: 'NYC Restaurant Inspection API',
	// 			body: JSON.parse(body)
	// 		});
	// 	} else {
	// 		return error;
	// 	}
	// });
});

app.get('/zipcode/:id', (req, res) => {
	request(`${url}?zipcode=${req.params.id}`, (error, response, body) => {
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

app.get('/borough/:id', (req, res) => {
	request(`${url}?boro=${req.params.id.toUpperCase()}`, (error, response, body) => {
		if (JSON.parse(body).length === 0) {
			return res.send('Nothing was found. Please make sure you are using one of five borough names: "Bronx", "Manhattan", "Queens", "Brooklyn" or "Staten Island".');
		}		
		if (!error && response.statusCode === 200) {
			res.send(body);
		} else {
			return error;
		}		
	});
});

app.get('/search', (req, res) => {
	res.render('search.hbs', {
		pageTitle: 'Search NYC Restaurant Inspections'
	});	
});

app.post('/search', (req, res) => {
	console.log(req.body);
	var zipcode = req.body.zipcode;
	var borough = req.body.borough;

	var data = req.body;
	var businessName = data.dba.toUpperCase();

	var socrataQuery = `$$app_token=${token}`;
	// if data.dba contains a value, add socrataQuery to urlQuery

	if (data.dba.length > 0) {
		socrataQuery += `&$where=DBA%20like%20%27%25${businessName}%25%27`;
	}

	// Remove business name query
	delete data.dba;

	// Remove zipcode query string if it's empty
	if (data.zipcode.length === 0) {
		delete data.zipcode;
	}

	// Merge query strings. Exclude undefined query strings.
	var urlQuery = querystring.stringify(_.merge(data));

	console.log(urlQuery);
	console.log(`${socrataUrl}?${socrataQuery + "&" + urlQuery}`);

	if (zipcode.length > 0 && zipcode.length !== 5) {
		return res.render("search.hbs", {errorMessage: `ERROR: Zip code should have 5 digits. You put in ${zipcode.length}`});
	}

	// if zipcode contains letters, return errorMessage
	// ADD CODE HERE
	
	request(`${socrataUrl}?${socrataQuery + "&" + urlQuery}`, (error, response, body) => {
		if (JSON.parse(body).length === 0) {
			return res.render("search.hbs", {
				pageTitle: 'Search Results',
				errorMessage: 'No results found.'});
		}

		if (!error && response.statusCode === 200) {
			var searchResults = JSON.parse(body);

			if (searchResults.length === 0) {
				return res.render("search.hbs", {errorMessage: 'No results found.'});
			} else {
				res.render("search.hbs", {
					pageTitle: 'Search Results',
					body: searchResults});		
			}	

			// If user search includes restaurant name
			// if (businessName.length > 0) {
			// 	var searchResults = JSON.parse(body).filter((business) => {
			// 		if (business.dba) {
			// 			return business.dba.toLowerCase().includes(businessName);
			// 		}
			// 	});
			// 	console.log(`${searchResults.length} search results`);

			// 	if (searchResults.length === 0) {
			// 		return res.render("search.hbs", {errorMessage: 'No results found.'});
			// 	} else {
			// 		res.render("search.hbs", {
			// 			pageTitle: 'Search Results',
			// 			body: searchResults});		
			// 	}				
			// } else {
			// 	console.log(`${url}?${urlQuery}`);
			// 	res.render("search.hbs", {
			// 		body: JSON.parse(body),
			// 		pageTitle: 'Search Results'
			// 	});
			// }
		} else {
			return error;
		}		
	});
});

// Route for experimenting with search by DBA name. DBA stands for "doing business as."
app.get('/dba/:id', (req, res) => {
	var businessName = req.params.id.toUpperCase();
	console.log(`You searched for "${businessName}"`);

	request(`${socrataUrl}?$where=DBA%20like%20%27%25${businessName}%25%27&$$app_token=${token}&boro=QUEENS&zipcode=11358`, (error, response, body) => {
		var searchResults = JSON.parse(body);
		console.log(`${socrataUrl}?$where=DBA%20like%20%27%25${businessName}%25%27&$$app_token=${token}&boro=QUEENS&zipcode=11358`);
		console.log(`Your search returned ${searchResults.length} results`);
		res.send(searchResults);
	});
});

// Start server
app.listen(port, () => {
	console.log(`App is running on http://localhost: ${port}`);
	console.log(`DOHMH New York City Restaurant Inspection Results: ${url}`);
});