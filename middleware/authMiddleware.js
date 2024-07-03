const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.id = decoded.id;
      next();
    } catch (error) {
      return res.json({ message: "Не авторизован" });
    }
  } else {
    return res.json({ message: "Не авторизован" });
  }
};



