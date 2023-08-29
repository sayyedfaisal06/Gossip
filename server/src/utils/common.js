const jwt = require("jsonwebtoken");

const createJwtToken = (userId) => {
  const secretKey = process.env.JWT_SECRET; // Replace this with your actual secret key
  const expiresIn = "1h"; // Token expiration time

  const token = jwt.sign({ userId }, secretKey, { expiresIn });

  return token;
};

module.exports = createJwtToken;
