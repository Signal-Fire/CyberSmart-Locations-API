/* jshint esversion: 6*/
var express = require('express'),
    config = require('./Configuration');

var Find_Routes = require('./Routes/Find');

app.use('/find', Find_Routes);

var app = express();

app.listen(config.port, () => {
    console.log('Locations API is sailing through ' + config.port + ' Dothraki hoardes are on their tails...');
});
