const path = require('path');

exports.get = (req, res) => {
  // res.status(404);
  // res.render("404.hbs", {
  //   pageTitle: "Page Not Found"
  // });
    res.sendFile(path.join(__dirname, "../../dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
};
