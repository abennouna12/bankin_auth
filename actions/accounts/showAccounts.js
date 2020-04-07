const axios = require('axios');
const config = require('config');
const hostname = config.get('RevolutConfig.hostname');

/**
 * Retrieve all the account details
 * @param {string} access_token The access token	
 */
function showAccounts(access_token) {
    axios({
        method: 'GET',
        url: hostname + '/api/1.0/accounts',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        }
    }).then((result) => {
        console.log(result.data);

    }).catch(e => {
        console.log(e);
    })
}

module.exports = {
    showAccounts
};