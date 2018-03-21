/* jshint esversion: 6*/
var express = require('express'),
    config = require('./Configuration'),
    cors = require('cors');

var app = express();

app.use(cors());

var Find_Routes = require('./Routes/Find');
var Insert_Routes = require('./Routes/Insert');
var Delete_Routes = require('./Routes/Delete');

app.use('/find', Find_Routes);
app.use('/insert', Insert_Routes);
app.use('/delete', Delete_Routes);

app.listen(config.port, () => {
    console.log('Locations API is sailing through ' + config.port + ' Dothraki hoardes are on their tails...');
});
