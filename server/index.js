const express = require("express");
const app = express();

// Express Routes

const middleware = require("./routes/middleware-route.js");
const router = require("./routes/index-route.js");
const api = require("./routes/api-route.js");
const search = require("./routes/search-route.js");
const violation_report = require("./routes/violation_report-route.js");
const error404 = require("./routes/error-route.js");
const shuffle_image = require("./routes/shuffle_image-route.js")

app.use(middleware);

const hbs = require("hbs");
const path = require("path");

// TODO: change source directory to partials, changing server folder directory
hbs.registerPartials(path.join(__dirname, "../views/partials"));
app.set("view engine", "hbs");


app.use(router);
app.use(shuffle_image)
app.use(search);
app.use(violation_report);
app.use(error404);

const port = process.env.PORT || 8080;

// Verify domain ownership for Loader.io
// TODO: changes to test directory for server folder directory change
app.get("/loaderio-fa3d7d398a3f4e83e9200e551ad73854.txt", (req, res) =>
  res.sendFile(
    path.resolve(
      __dirname,
      "./test/loaderio-fa3d7d398a3f4e83e9200e551ad73854.txt"
    )
  )
);

// Start server
app.listen(port, () => {
  console.log(`App is running on http://localhost: ${port}`);
});
