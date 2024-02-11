const { Card } = require("../models/models");
const path = require("node:path");
const uuid = require("uuid");
const translitRusEng = require("translit-rus-eng");
const { Op, Sequelize } = require("sequelize");

const sortFn = (sort) => {
  if (sort == "По умолчанию") {
    return ["createdAt"];
  } else if (sort == "По возврастанию") {
    return ["price", "ASC"];
  } else if (sort == "По убыванию") {
    return ["price", "DESC"];
  } else if (sort == "По популярности") {
    return ["rating", "DESC"];
  }
  return ["createdAt"];
};

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

  async delete(req, res) {
    try {
      const { id } = req.params;
      const card = await Card.destroy({ where: { id } });
      res.json({ card, message: "Карточка удалена" });
    } catch (error) {
      res.json({ message: "Ошибка при удалении" });
    }
  }

  async edit(req, res) {
    try {
      const {
        id,
        cardName,
        price,
        priceSale,
        tags,
        category,
        description,
        count,
        photos,
      } = req.body;

      const card = await Card.findOne({ where: { id: id } });

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

        card.photos = newPhotos;
      }

      card.cardName = cardName;
      card.cardNameTranslate = translitRusEng(cardName, {
        slug: true,
      }).toLowerCase();
      card.price = price;
      card.priceSale = priceSale;
      card.tags = tags;
      card.category = category;
      card.description = description;
      card.count = count;
      await card.save();
      res.json({ card, message: "Карточа создана" });
    } catch (error) {
      res.json({ message: "Ошибка при обновлении" });
    }
  }

  async filterCards(req, res) {
    try {
      // const { text, tags, sort } = req.params;
      const { text, tags, sort } = req.query;
      let tagsArray = "";
      if (tags) {
        tagsArray = tags.split(",");
      }
      let cards;

      if (tagsArray) {
        cards = await Card.findAll({
          where: {
            [Op.and]: {
              cardName: { [Op.iLike]: `%${text}%` },
              tags: tagsArray,
            },
          },
          order: [sortFn(sort)],
        });
      } else {
        cards = await Card.findAll({
          where: {
            [Op.and]: {
              cardName: { [Op.iLike]: `%${text}%` },
            },
          },
          order: [sortFn(sort)],
        });
      }

      if (!tags && !text) {
        cards = await Card.findAll({
          order: [sortFn(sort)],
        });
      }
      res.json({ cards, message: "Карточка получена" });
    } catch (error) {
      res.json({ message: "Ошибка при получении" });
    }
  }

  async getCards(req, res) {
    try {
      let cards;
      cards = await Card.findAll();

      res.json({ cards, message: "Карточки получены" });
    } catch (error) {
      res.json({ message: "Ошибка при получении" });
    }
  }

  async getCard(req, res) {
    try {
      const { cardNameTranslate } = req.params;
      const card = await Card.findOne({ where: { cardNameTranslate } });
      // console.log(card);
      res.json({ card, message: "Карточка получена" });
    } catch (error) {
      res.json({ message: "Ошибка при получении" });
    }
  }
}

module.exports = new CardControll();
