const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current" +
  "?access_key=73eb00cf3b2bf26364649d16fd78d99f&query=New%20York";
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to reach weather stack server!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      `It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip}% chance for rain `
    );
  }
});

const mapboxURL =

  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmloYWxrYXJhZGFuIiwiYSI6ImNrcWJ3Z3kyMjBlaG0yeG5tYmU2dXR4YnAifQ.HCsFjVibtQm9D9gMHhGMJA" +
  "&limit=1";
request({ url: mapboxURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to reach mapbox server!");
  } else if (response.body.message) {
    console.log(response.body.message);
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
