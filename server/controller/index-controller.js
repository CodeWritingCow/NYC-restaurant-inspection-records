const path = require("path");

// bundle compression gzip
exports.compressJS = (req, res, next) => {
  req.url = req.url + ".gz";
  res.set("Content-Encoding", "gzip");
  next();
};

exports.home = (req, res) => {
  // handlebars segment
  // res.render("home.hbs", {
  //   pageTitle: "Restaurant Inspection Records"
  // });

  // react segment
  res.sendFile(path.join(__dirname, "../../dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
};
