const mongoose = require("mongoose");
const nurses = require("./routes/nurses");
const equipments = require("./routes/equipments");
const mangers = require("./routes/mangers");
const engs = require("./routes/engs");
const doctors = require("./routes/doctors");
const patients = require("./routes/patients");
const medicines = require("./routes/medicines");
const rooms = require("./routes/rooms");

const express = require("express");
const app = express();
// const flash = require("connect-flash");
const bodyParser = require("body-parser");

mongoose
  .connect("mongodb://localhost/icu")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/mangers", mangers);
app.use("/api/engs", engs);
app.use("/api/nurses", nurses);
app.use("/api/equipments", equipments);
app.use("/api/rooms", rooms);
app.use("/api/patients", patients);
app.use("/api/doctors", doctors);
app.use("/api/medicines", medicines);
// let db = mongoose.connection;

// // Check connection
// db.once("open", function() {
//   console.log("Connected to MongoDB");
// });

// // Check for DB errors
// db.on("error", function(err) {
//   console.log(err);
// });

// Route Files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let doctors = require("./routes/doctors");
app.use("/doctors", doctors);

// For testing
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
