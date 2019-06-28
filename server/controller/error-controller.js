exports.get = (req, res) => {
  res.status(404);
  res.render("404.hbs", {
    pageTitle: "Page Not Found"
  });
};
