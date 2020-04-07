const qs = require('qs');
const axios = require('axios');
const config = require('config');
const hostname = config.get('RevolutConfig.hostname');
const client_id = config.get('RevolutConfig.client_id');
const refresh_token = config.get('RevolutConfig.refresh_token');
const { generateJWTToken } = require("./generateJWTToken");

/**
 * Generate an authentication accessToken
 * @returns {string} Access Token
 */
function getAccessToken() {
    return axios({
        method: 'POST',
        url: hostname + '/api/1.0/auth/token',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({
            "grant_type": "refresh_token",
            "refresh_token": refresh_token,
            "client_id": client_id,
            "client_assertion_type": "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
            "client_assertion": generateJWTToken(),
        })
    })
        .then(result => result.data.access_token)
        .catch(e => {
            throw new Error("ERROR_ACCESS_TOKEN");
        })
}

module.exports = {
    getAccessToken
};