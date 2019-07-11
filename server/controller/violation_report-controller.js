exports.get = (req, res) => {
  // res.render("reportViolations.hbs", {
  //   pageTitle: "Report Violations"
  // });

  // send html file when user directly requests this endpoint
  res.sendFile(path.join(__dirname, "../../dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });

};
