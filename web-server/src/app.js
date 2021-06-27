const path = require("path");

const express = require("express");
const { appendFileSync } = require("fs");
const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "nihal karadan",
  });
});


app.get("/weather", (req, res) => {
  res.send({
    forecast: "forecast",
    location: "location",
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
