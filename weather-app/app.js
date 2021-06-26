const request = require("postman-request");
const forecast = require("./utils/forecast")
const geocode = require("./utils/geocode")

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});


geocode("Newyork", (error, data) => {
  console.log("Error ", error);
  console.log("Data ", data);
});
