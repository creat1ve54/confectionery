const { Admin } = require("../models/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwt = (id, userName) => {
  return jwt.sign({ id, userName }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class AdminController {
  async registration(req, res) {
    try {
      const { userName, password } = req.body;
      const adminCheck = await Admin.findOne({ where: { userName } });
      if (adminCheck) {
        return res.json({
          message: "Пользователь с таким лоигном уже сущесвует",
        });
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const admin = await Admin.create({ userName, password: hashPassword });
      const token = generateJwt(admin.id, admin.userName);
      res.json({ admin, token, message: "Регистрация прошла успешна" });
    } catch (error) {
      res.json({ message: "Ошибка в регистрации" });
    }
  }

  async login(req, res) {
    try {
      const { userName, password } = req.body;
      const admin = await Admin.findOne({ where: { userName } });
      if (!admin) {
        return res.json({
          message: "Неверный логин или пароль!",
        });
      }
      const comparePassword = bcrypt.compareSync(password, admin.password);
      if (!comparePassword) {
        return res.json({ message: "Неверный логин или пароль!" });
      }
      const token = generateJwt(admin.id, admin.userName);
      res.json({ admin, token });
    } catch (error) {
      res.json({ message: "Ошибка при авторизации" });
    }
  }

  async check(req, res) {
    try {
      const admin = await Admin.findOne({ where: { id: req.id } });
      if (!admin) {
        res.json({ message: "Такого пользователя не существует!" });
      }
      const token = generateJwt(admin.id, admin.userName);
      res.json({ token, admin });
    } catch (error) {
      res.json({ message: "Нет доступа!" });
    }
  }
}

module.exports = new AdminController();



