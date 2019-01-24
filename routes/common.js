var express = require('express');
var router = express.Router();


/* Check if a User Exisits */
function checkUserExisits(token = null, userId = null) {
    return true
}


/* Verify token*/
function verifyUserToken(token) {
    return true
}

/* Generate token*/
function generateUserToken(userId) {
    return true
}


module.exports = {
    checkUserExisits: checkUserExisits,
    verifyUserToken: verifyUserToken,
    generateUserToken: generateUserToken
};