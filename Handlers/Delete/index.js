/*jshint esversion: 6*/
var Location = require('../../Models/Location');

module.exports = class Delete {
    constructor() {

    }

    DeleteAll() {
        return new Promise(function(resolve, reject) {
            Location.remove({}, function(err ,result) {
                if (err || result === null)
                    return reject("Unable to delete all");

                return resolve(true);
            })
        })
    }

    DeleteById(id) {
        return new Promise(function(resolve, reject) {
            Location.findByIdAndUpdate(id, { active : false }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to delete location with ID: " + id);
                
                return resolve(true);
            });
        });
    }

    DeleteByName(name) {
        return new Promise(function(resolve, reject) {
            Location.findOneAndUpdate({ name : name }, { active : false }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to delete location with Name: " + name);

                return resolve(true);
            });
        });
    }    
};