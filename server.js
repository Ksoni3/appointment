const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");

const userRoutes = require("./routes/userRoutes");
// import connectDb from "./config/db";

//dotenv config
dotenv.config();

//mongodb connection

connectDb();
//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server is working",
  });
});

app.use("/api/v1/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App is running on ${process.env.PORT}`);
});
