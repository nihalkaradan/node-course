const express = require("express");
const bodyParser = require("body-parser");

const Task = require("./models/task");
const taskRouter = require("./routers/task");

const User = require("./models/user");
const userRouter = require("./routers/user");

require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());

app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`listening on port ${port} ...`);
});
