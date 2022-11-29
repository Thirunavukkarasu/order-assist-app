const axios = require("axios");
const { AUTH_DOMAIN } = process.env;

const userMiddleware = async (req, res, next) => {
  const { headers } = req || {};

  try {
    const userInfo = await axios({
      url: `https://${AUTH_DOMAIN}/userinfo`,
      headers: {
        Authorization: headers.authorization,
      },
    });
    req.user = userInfo.data;
    next();
  } catch (e) {
    return res.status(401).json({
      message: "User Info Fetch Failed!",
    });
  }
};

module.exports = userMiddleware;
