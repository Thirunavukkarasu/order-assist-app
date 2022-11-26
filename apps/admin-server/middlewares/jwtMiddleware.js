
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const {AUTH_DOMAIN } = process.env;

const checkJwt = jwt.expressjwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${AUTH_DOMAIN}/.well-known/jwks.json`,
    }),
    audience: `https://${AUTH_DOMAIN}/api/v2/`,
    issuer: `https://${AUTH_DOMAIN}/`,
    algorithms: ["RS256"],
  });

  module.exports = checkJwt;
