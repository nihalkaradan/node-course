const request = require("postman-request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const address = process.argv[2];
if (!address) {
  return console.log("No address provided!");
}
geocode(address, (error,  { longitude, latitude, location }={}) => {
  if (error) {
    return console.log(error);
  }
  forecast(longitude, latitude , (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log(forecastData);
  });
});
