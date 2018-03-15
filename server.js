/* jshint esversion: 6*/
var express = require('express'),
    config = require('./Configuration');

var app = express();

app.listen(config.port, () => {
    console.log('Locations API is sailing through ' + config.port + ' Dothraki hoardes are on their tails...');
});
