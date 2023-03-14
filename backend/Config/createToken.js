const jwt = require("jsonwebtoken");

module.exports = (data) => {
    return jwt.sign(data, '$dfksdklfksd/$klfdfldf', { expiresIn: '1d' });
}

