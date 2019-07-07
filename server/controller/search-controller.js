const path = require("path");
const _ = require("lodash");
const axios = require("axios");
const querystring = require("querystring");
const token = process.env.API_TOKEN || require("../../token.js");
const redisUrl = process.env.REDIS_URL || require("../../redisUrl.js");
const client = require('redis').createClient(redisUrl);

// token acquired by OpenNYC Data API
const socrataUrl = "https://data.cityofnewyork.us/resource/9w7m-hzhe.json";

exports.get = (req, res) => {
  res.render("search.hbs", {
    pageTitle: "Advanced Search"
  });
};

exports.post = (req, res) => {
  var { zipcode } = req.body;
  var { borough } = req.body;

  var data = req.body;
  var businessName = data.dba.toUpperCase();

  // If businessName includes single quote mark, change it to double quote
  // This prevents socrataQuery from throwing an error
  if (_.includes(businessName, "'")) {
    businessName = businessName.replace(/'/g, "''");
  }

  var socrataQuery = `$$app_token=${token}`;

  // if data.dba contains a value, add socrataQuery to urlQuery
  if (data.dba.length > 0) {
    socrataQuery += `&$where=DBA%20like%20%27%25${businessName}%25%27`;
  }

  // Remove business name query
  delete data.dba;

  // Remove zipcode query string if it's empty
  if (data.zipcode === undefined || data.zipcode.length === 0) {
    delete data.zipcode;
  }

  // Merge query strings. Exclude undefined query strings.
  var urlQuery = querystring.stringify(_.merge(data));

  // Check cache data from Redis
  client.get(`${socrataQuery + "&" + urlQuery}`, (err, result) => {
    let searchResults = JSON.parse(result);

    if (searchResults) {
      
      if (searchResults.length === 0) {
            return res.render("results.hbs", {
              pageTitle: "Search Results",
              numberResults: "Your search returned no results."
            });
          } else {
            res.render("results.hbs", {
              pageTitle: "Search Results",
              body: searchResults,
              numberResults: `Your search returned ${searchResults.length} results.`
            });
          }

    } else {

      axios(`${socrataUrl}?${socrataQuery + "&" + urlQuery}`)
        .then(response => {
          let searchResults = response.data;

          // Cache data on Redis for 1800ms
          client.setex(`${socrataQuery + "&" + urlQuery}`, 1800, JSON.stringify(searchResults));
          
          if (searchResults.length === 0) {
            return res.render("results.hbs", {
              pageTitle: "Search Results",
              numberResults: "Your search returned no results."
            });
          } else {
            res.render("results.hbs", {
              pageTitle: "Search Results",
              body: searchResults,
              numberResults: `Your search returned ${searchResults.length} results.`
            });
          }
        })
        .catch(err => {
          // res.status(err.response.status);
          res.render("error.hbs", {
            pageTitle: "Something went wrong!",
            errorMessage:
              "There seems to be an error. Let's go home and try something else."
          });
        });      
    }
  });

};

const getData = function(url) {
  // Check cache data from Redis
  client.get(url, (err, result) => {
    if (err) return err;
    // if URL exists as Redis key
    if (result) {
      // return Redis value
      return JSON.parse(result);
    } else {
      axios(url)
        .then(response => {
            // Save url as Redis key, cache data on Redis for 1800ms
            client.setex(`${socrataQuery + "&" + urlQuery}`, 1800, JSON.stringify(response.data));
            return response.data;
        })
        .catch(err => err);
    }
  });
}