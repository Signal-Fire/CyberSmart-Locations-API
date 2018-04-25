/*jshint esversion: 6*/
var Location = require('../../Models/Location');
var Logger = require('../../Handlers/Logger');

module.exports = class Delete {
    constructor() {

    }

    DeleteAll() {
        return new Promise(function(resolve, reject) {
            Location.remove({}, function(err ,result) {
                if (err || result === null)
                    return reject("Unable to delete all");

                Logger.CreateLog({
                    message : 'Removed all locations',
                    created_by_user : 'System'
                });

                return resolve(true);
            })
        })
    }

    DeleteById(id, username) {
        return new Promise(function(resolve, reject) {
            Location.findByIdAndUpdate(id, { active : false }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to delete location with ID: " + id);
                
                Logger.CreateLog({
                    message : 'Removed the ' + result.name,
                    created_by_user : username,
                    type : "Location"
                });   

                return resolve(true);
            });
        });
    }

    DeleteByName(name, username) {
        return new Promise(function(resolve, reject) {
            Location.findOneAndUpdate({ name : name }, { active : false }, function(err, result) {
                if (err || result === null)
                    return reject("Unable to delete location with Name: " + name);

                Logger.CreateLog({
                    message : 'Removed the ' + result.name,
                    created_by_user : username,
                    type : "Location"
                });    

                return resolve(true);
            });
        });
    }    
};