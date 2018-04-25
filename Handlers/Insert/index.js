var Location = require('../../Models/Location');
var Logger = require('../Logger');

class Insert {
    constructor() {

    }

    AddLocation(location) {
        return new Promise(function(resolve, reject) {
            var newLocation = new Location(location);
            newLocation.save(function(err, result) {
                if (err || result === null)
                    return reject("Unable to save location");

                Logger.CreateLog({
                    message : 'Added the ' + result.name,
                    created_by_user : result.created_by_user,
                    type : "Location"
                });
                
                return resolve(result);
            });
        });
    }
}

module.exports = Insert;