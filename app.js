//const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
//const jwt = require("jsonwebtoken")
const _ = require("lodash");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const bcrypt = require('bcryptjs');
// const engines = require('consolidate');
const nurses = require("./routes/nurses");
const equipments = require("./routes/equipments");
const exphbs = require('express-handlebars')
const mangers = require("./routes/mangers");
const engs = require("./routes/engs");
const doctors = require("./routes/doctors");
const patients = require("./routes/patients");
const medicines = require("./routes/medicines");
const rooms = require("./routes/rooms");
const feedbacks = require("./routes/feedbacks");
const login = require("./routes/login");
const app = express();
app.engine('.hbs',exphbs({layout:false,extname:'.hbs'}));
app.set('view engine','.hbs');
app.set("views", "views");
// app.engine('html',engines.mustache);
// app.set('view engine','html');
app.use(express.static(path.join(__dirname, 'public')));

//  if (!config.get('jwtprivatekey')){
//    console.error('fatal error: jwtprivatekey is not defined ');
//    process.exit(1);
// }
// in terminal set doctor_jwtprivatekey = my securekey
// a run b3d kda


// Database connection
mongoose
  .connect("mongodb://localhost/icu")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error(err));

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
app.use("/api/feedbacks", feedbacks);
 app.use("/api/login", login);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
