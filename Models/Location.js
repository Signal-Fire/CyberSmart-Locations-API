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
    created_by_user: {
        type: String,
        required : true,
    },
    created_timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = conn.model('Location', LocationSchema);
