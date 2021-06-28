const request = require("postman-request");

const geocode = (address, callback) => {
  const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibmloYWxrYXJhZGFuIiwiYSI6ImNrcWJ3Z3kyMjBlaG0yeG5tYmU2dXR4YnAifQ.HCsFjVibtQm9D9gMHhGMJA&limit=1`;
  request({ url: mapboxURL, json: true }, (error, response) => {
    const { body } = response;
    if (error) {
      callback("Unable to reach mapbox server!");
    } else if (body.message) {
      // console.log(response.body.message);
      const { message } = body;
      callback(message);
    } else if (!body.features[0]) {
      callback("Unable to reach mapbox server!");
    } else {
      if (!body.features[0].center) {
        return console.log("error");
      }
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
      // const latitude = response.body.features[0].center[1];
      // const longitude = response.body.features[0].center[0];
      // console.log(latitude, longitude);
    }
  });
};

module.exports = geocode;
