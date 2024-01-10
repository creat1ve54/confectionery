const { Card } = require("../models/models");
const path = require("node:path");
const uuid = require("uuid");
const translitRusEng = require("translit-rus-eng");
const { Op, Sequelize } = require("sequelize");

class CardControll {
  async create(req, res) {
    try {
      const {
        cardName,
        price,
        priceSale,
        tags,
        category,
        description,
        count,
        // photos,
      } = req.body;
      let newPhotos = "";
      if (req.files) {
        if (!req.files.photos.length) {
          let photo = req.files.photos;
          let fileName = uuid.v4() + "." + photo.name.split(".")[1];
          newPhotos = newPhotos + fileName + ", ";
          photo.mv(path.resolve(__dirname, "..", "static", fileName));
        } else {
          req.files.photos.forEach((photo) => {
            let fileName = uuid.v4() + photo.name.split(".")[1];
            newPhotos = newPhotos + fileName + ", ";
            photo.mv(path.resolve(__dirname, "..", "static", fileName));
          });
        }
      }

      const card = await Card.create({
        cardName,
        cardNameTranslate: translitRusEng(cardName, {
          slug: true,
        }).toLowerCase(),
        price,
        priceSale,
        tags,
        category,
        description,
        count,
        photos: newPhotos,
      });
      res.json({ card, message: "Карточа создана" });
    } catch (error) {
      res.json({ message: "Ошибка при создании" });
    }
  }

  async delete(req, res) {}

  async edit(req, res) {}

  async searchCards(req, res) {
    try {
      const { text } = req.params;
      let cards;
      if (text != "all") {
        cards = await Card.findAll({
          where: { cardName: { [Op.iLike]: `%${text}%` } },
        });
      } else {
        cards = await Card.findAll({ order: [["count", "ASC"]] });
      }
      res.json({ cards, message: "Карточка получена" });
    } catch (error) {
      res.json({ message: "Ошибка при получении" });
    }
  }

  async getCards(req, res) {
    try {
      const cards = await Card.findAll({ order: [["count", "ASC"]] });
      res.json({ cards, message: "Карточки получены" });
    } catch (error) {
      res.json({ message: "Ошибка при получении" });
    }
  }

  async getCard(req, res) {
    try {
      const { cardNameTranslate } = req.params;
      const card = await Card.findOne({ where: { cardNameTranslate } });
      res.json({ card, message: "Карточка получена" });
    } catch (error) {
      res.json({ message: "Ошибка при получении" });
    }
  }
}

module.exports = new CardControll();
