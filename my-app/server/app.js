// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql2');


const app = express();
console.log("OK");

try {
// create the connection to database
const connection = mysql.createConnection({
  host: 'bdmbia0py-mysql.services.clever-cloud.com',
  user: 'uxowyvbiemkxwjij',
  password: 'bSxBwfwDM5eknHvcM2q',
  database: 'bdmbia0py'
});

// simple query
connection.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
} catch (error) {
  logger.error(error);
  throw error;
}


// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;