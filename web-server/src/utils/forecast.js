//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require("postman-request");
const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=73eb00cf3b2bf26364649d16fd78d99f&query=${encodeURIComponent(
    longitude
  )},${encodeURIComponent(latitude)}`;
  request({ url, json: true }, (error, response) => {
    const {body} = response
    if (error) {
      callback("Unable to reach weather stack server!");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      callback(
        undefined,
        `It is currently ${body.current.temperature} degrees out. There is a ${body.current.precip}% chance for rain `
      );
    }
  });
};

module.exports = forecast;

// const url =
//   "http://api.weatherstack.com/current" +
//   "?access_key=73eb00cf3b2bf26364649d16fd78d99f&query=New%20York";
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to reach weather stack server!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       `It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip}% chance for rain `
//     );
//   }
// });
