/* jshint esversion: 6*/
var route = require('express').Router();
var Deleter = new(require('../../Handlers/Delete'))();

route.post('/:id', function(req, res) {
    try {
        Deleter.DeleteById(req.params.id).then(deleted => {
            res.status(200).send({ success : deleted });
        }).catch(error => {
            res.status(400).send({ error : error});
        });
    } catch (ex) {
        res.status(500).send({ error : ex });
    }
});

route.post('/:name', function(req, res) {
    try {
        Deleter.DeleteByName(req.params.name).then(deleted => {
            res.status(200).send({ success : deleted });
        }).catch(error => {
            res.status(400).send({ error : error});
        });
    } catch (ex) {
        res.status(500).send({ error : ex });
    }
});

module.exports = route;