exports.get = (req, res) => {
  res.render("reportViolations.hbs", {
    pageTitle: "Report Violations"
  });
};
