var axios = require('axios');
var config = require('../../Configuration');

class Logger {
    constructor() {

    }

    CreateLog(log) {   
        axios.post({
            method : 'POST',
            url : config["logger-url"] + '/create',
            data : {
                message : log.message,
                created_by_user : 'System'
            }
        }).then(res => {
            console.log('Created Log')
        }).catch(err => {
            console.log('Error Creating Log', err)
        })
    }
}

module.exports = new(Logger);