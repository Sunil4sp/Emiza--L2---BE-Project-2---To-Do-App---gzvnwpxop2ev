const jwt = require("jsonwebtoken");

function token(obj){
    return jwt.sign(obj, process.env.JWT_PRIVATE_KEY);
}

module.exports = {
    token,
};