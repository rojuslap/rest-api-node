const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoute = require("./routes/people");

app.use("/people", postsRoute);

//routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//connect to mango

const connect = () => {
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => console.log("connected"));
};

connect();
app.listen(3000);
