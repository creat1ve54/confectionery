const nodemailer = require("nodemailer");
// const translitRusEng = require("translit-rus-eng");


const convector = (value) => {
  return value?.toLocaleString() + ' ₽';
};


class CartControll {
  async send(req, res) {
    try {
      const { cart, result, phone } = req.body;
      let order = `<h2>Заказ:</h2>`;
      let transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
          user: "artyr.petrosyan15@mail.ru",
          pass: "astyqZQTBpC7VGndGCBC",
        },
      });

      cart.forEach((el) => {
        order += `
          <div>ID Товара: ${el.id}</div>
          <div>Название товара: ${el.cardName}</div>
          <div>Количество товара: ${el.count}</div>
          </br>
        `;
      });

      order += `<div>Номер телефона: ${phone}</div>`
      order += `<div>Итоговая цена: ${convector(result)}</div>`

      let resultSend = await transporter.sendMail({
        from: "<artyr.petrosyan15@mail.ru>",
        to: "artyr.petrosyan15@mail.ru",
        subject: "Заказ",
        html: order,
      });
      res.send({ message: "Заказ отправлен" });
    } catch (error) {
      console.log(error);
      res.send({ message: 'Ошибка заказа' });
    }
  }
}

module.exports = new CartControll();
