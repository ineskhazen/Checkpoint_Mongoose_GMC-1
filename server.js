//require express
const express = require("express");
const connectDB = require("./config/connectDB");
//-------------------------------------
//instance of all express methods
const app = express();
require("dotenv").config();
//-------------------------------------
//connect with database
connectDB();
//routs
//Middleware global to read JSON type
app.use(express.json());
app.use("/api/contact", require("./router/contact"));
//Port
const PORT = process.env.PORT;
//start the server
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});







