/* jshint esversion: 6*/
var Location = require('../../Models/Location');

class Insert {
    constructor() {

    }

    AddLocation(location) {
        return new Promise(function(resolve, reject) {
            var newLocation = new Location(Location);
            newLocation.save(function(err, result) {
                if (err || result === null)
                    return reject("Unable to save location");

                return resolve(result);
            });
        });
    }
}

module.exports = Insert;