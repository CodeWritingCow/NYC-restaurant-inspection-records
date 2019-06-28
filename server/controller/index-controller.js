const path = require("path");

exports.home = (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Restaurant Inspection Records"
  });
};
