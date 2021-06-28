console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  const url = `http://127.0.0.1:3000/weather?address=${location}`;
  const messageOne = document.querySelector("#message-1");
  const messageTwo = document.querySelector("#message-2");
  messageOne.textContent = "Loading...";
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        return (messageOne.textContent = data.error);
      }
      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecast;
      //   console.log(data.location);
      //   console.log(data.forecast);
    });
  });
});
