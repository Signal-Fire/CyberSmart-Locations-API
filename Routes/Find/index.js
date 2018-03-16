/* jshint esversion: 6*/
var route = require('express').Router();
var Finder = new(require('../../Handlers/Find'))();

route.get('/:id', function(req, res) {
    try {
        Finder.FindById(req.params.id).then(location => {
            res.status(200).send(location);
        }).catch(error => {
            res.status(404).send("{ error : " + error + "}");
        });
    } catch (ex) {
        res.status(500).send("{ error : unexpected server crash }");
    }
});

route.get('/name', function(req, res) {
    try {
        Finder.FindByName(req.body.name).then(location => {
            res.status(200).send(location);
        }).catch(error => {
            res.status(404).send("{ error : " + error + "}");
        });
    } catch (ex) {
        res.status(500).send("{ error : unexpected server crash }");
    }
});

module.exports = route;