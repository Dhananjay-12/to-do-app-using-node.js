const express = require('express');
const app = express();
const bosyParser = require('body-parser');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
require('dotenv').config();
require('./database/connection')();

app.use(bodyParser.urlencoded({ extended: true }));
//set template engine for ejs
app.set('view engine', 'ejs');

//load assets

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets')));
//loading the route handler file
app.use('/', require('./server/routes/route'));

//add a listener
app.listen(port, () => {
  console.log(`Server running at  http://localhost:${port}`);
});
