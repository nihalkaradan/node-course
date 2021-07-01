const mongoose = require("mongoose");
const validator = require("validator");
const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw Error("Value is less than 0");
      }
    },
  },
  email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("Invalid email format");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    validate(value) {
      if (value.includes("password")) {
        throw Error("Dont use password as password");
      }
    },
  },
});
module.exports = User;
