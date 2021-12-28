const mongoose = require("mongoose")
const users = require("./src/models/authorModel.js")
const products = require("./src/models/bookModel.js")
console.log("hi!");
mongoose.connect("mongodb://localhost:27017/books")