const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      msg: 'Authorization token missing'
    });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      msg: 'Authorization token missing',
      error:err
    });
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "$dfksdklfksd/$klfdfldf");
  } catch (err) {
    return res.status(401).json({
      success: false,
      msg: 'Invalid authorization token',
      error: err
    });
  }
  req.user = decodedToken;
  next();
};

module.exports = authMiddleware;
