const fs = require('fs');
const jwt = require('jsonwebtoken');
const config = require('config');
const client_id = config.get('RevolutConfig.client_id');
const aud = config.get('RevolutConfig.aud');
const issuer = config.get('RevolutConfig.issuer');

/**
 * Generate a JWT Token 
 * @returns {string} JWT Token	
 */
function generateJWTToken() {
  var privateKeyName = 'privatekey.pem';
  var payload = {
    "iss": issuer,
    "sub": client_id,
    "aud": aud
  }
  const privateKey = fs.readFileSync(privateKeyName);
  return jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: 60 * 60 });
}

module.exports = {
  generateJWTToken
};
