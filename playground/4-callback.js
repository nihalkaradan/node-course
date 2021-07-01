const doWorkCallBack = (callback) => {
  setTimeout(() => {
    callback(undefined, "Succeful mwuthe");
    // callback("There is an error");
  }, 2000);
};

doWorkCallBack((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
