const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
// const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
// const Note = require('models/note.model.js');
// const Note = require('app/models/note.model.js');

// mongoose.Promise = global.Promise;

// Connecting to the database
// mongoose.connect(dbConfig.url, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application."});
});

let pingCount = 0;
app.get('/ping',(req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let date_ob = new Date();
    // current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();
 // current hours
let hours = date_ob.getHours();
// current minutes
let minutes = date_ob.getMinutes();
// current seconds
let seconds = date_ob.getSeconds();
var getIP = require('ipware')().get_ip;
var ipInfo = getIP(req);
  pingCount++;
  res.send([{"count": pingCount,"date":year + "-" + month + "-" + date,"time":hours + ":" + minutes,"Partner":ipInfo}]);
//   res.json({"count": pingCount,"date":year + "-" + month + "-" + date,"time":hours + ":" + minutes,"Partner":ipInfo});
});





// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});