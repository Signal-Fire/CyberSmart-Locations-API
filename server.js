/* jshint esversion: 6*/
var express = require('express'),
    cors = require('cors'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    config = require('./Configuration');

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(compression());

var Find_Routes = require('./Routes/Find');
var Insert_Routes = require('./Routes/Insert');
var Delete_Routes = require('./Routes/Delete');

app.use('/find', Find_Routes);
app.use('/insert', Insert_Routes);
app.use('/delete', Delete_Routes);

app.listen(config.port, () => {
    console.log('Locations API is sailing through ' + config.port + ' Dothraki hoardes are on their tails...');
});
