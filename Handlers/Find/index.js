/* jshint esversion: 6*/
var Location = require('../../Models/Location');

class Find {
    constructor() {

    }

    FindById(id) {
        return new Promise(function(resolve, reject) {
            Location.findById(id, function(err, result) {
                if (err || result === null)
                    return reject("Unable to find Location with ID: " + id);

                return resolve(result);
            });
        });
    }

    FindByName(name) {
        return new Promise(function(resolve, reject) {
            Location.findOne({ name : name }, function(err, result) {
                if (err || result === null) 
                    return reject("Unable to find Location with name: " + name);

                return resolve(result);
            });
        });
    }
}

module.exports = Find;