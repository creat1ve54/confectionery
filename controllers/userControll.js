const nodemailer = require("nodemailer");
const translitRusEng = require("translit-rus-eng");
const login = async (req, res) => {
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.mail.ru",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: "dzhansuzyan02@inbox.ru",
  //     pass: "AS2FY9jjsbw9MVyVns54",
  //   },
  // });
  // let result = await transporter.sendMail({
  //   from: "Забивной <dzhansuzyan02@inbox.ru>",
  //   to: "dzhansuzyan02@inbox.ru",
  //   subject: "КАЗИНАК РОЛАН ПЛЕЙМЕЙКИРОВИЧ",
  //   html: `fdsf`,
  // });
  // res.send("respond with a resource");
};

const registration = async (req, res) => {
  res.send("respond with a resource");
};
const getMe = async (req, res) => {
  let text = "Клапан запорный прямой PPR 20х1/2, РТП";
  res.send(translitRusEng(text, { slug: true }));
};

module.exports = {
  login,
  registration,
  getMe,
};
