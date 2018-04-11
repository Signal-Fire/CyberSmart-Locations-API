/* jshint esversion: 6 */
var route = require('express').Router();
var Inserter = new(require('../../Handlers/Insert'))();

route.post('/', function(req, res) {
    try {
        Inserter.AddLocation(req.body).then(location => {
            res.status(201).send(location);
        }).catch(error => {
            res.status(404).send({ error : "Error during insert"});
        });
    } catch (ex) {
        res.status(500).send({ error : "Unexpected server error"});
    }
});

module.exports = route;