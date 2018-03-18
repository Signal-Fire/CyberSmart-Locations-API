var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('../Configuration');

var Schema = mongoose.Schema;

var conn = mongoose.createConnection(config.database);

var LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = conn.model('Location', LocationSchema);
