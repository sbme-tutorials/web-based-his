const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require("mongoose");
const nurses = require('./routes/nurses');
const equipments = require('./routes/equipments');
const mangers = require('./routes/mangers');
const engs = require('./routes/engs');
const doctors = require('./routes/doctors')
const patients = require('./routes/patients')
const medicines = require('./routes/medicines')
const rooms = require('./routes/rooms')
const login = require('./routes/login')
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/icu')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


app.use(express.json());
app.use('/api/mangers', mangers);
app.use('/api/engs', engs);
app.use('/api/nurses', nurses);
app.use('/api/equipments', equipments);
app.use('/api/rooms', rooms);
app.use('/api/patients', patients);
app.use('/api/doctors', doctors);
app.use('/api/medicines', medicines);
app.use('/api/login',login);
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
app.use(express.json());
app.use("/api/mangers", mangers);
app.use("/api/engs", engs);
app.use("/api/nurses", nurses);
app.use("/api/equipments", equipments);
app.use("/api/rooms", rooms);
app.use("/api/patients", patients);
app.use("/api/doctors", doctors);
app.use("/api/medicines", medicines);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
