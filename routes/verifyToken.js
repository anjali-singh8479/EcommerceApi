const jwt = require("jsonwebtoken");
const verifytoken = async (req, res, next) => {
  const authtoken = await req.headers.authheader;
  if (!authtoken) {
    res.status(400).json("you are not authorised user");
  } else {
    const token = await authtoken.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(400).json("invalid token");
      } else {
        req.user = user;
        next();
      }
    });
  }
};
const verifyAndAuthorization = (req, res, next) => {
  verifytoken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isadmin) {
      next();
    } else {
      res.status(403).json("you are not allowed to do this");
    }
  });
};
const verifyAndAdmin = async (req, res, next) => {
  verifyAndAuthorization(req, res, () => {
    if (req.user.isadmin) {
      next();
    } else {
      res.status(400).json("you are not an admin");
    }
  });
};
module.exports = { verifytoken, verifyAndAuthorization, verifyAndAdmin };
