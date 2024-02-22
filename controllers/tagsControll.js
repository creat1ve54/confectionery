const { Tags } = require("../models/models");

class TagsControll {
  async create(req, res) {
    try {
      const { tag } = req.body;
      const tags = await Tags.create({
        tag,
      });
      res.json({ tags, message: "Тег создан" });
    } catch (error) {
      res.json({ message: "Ошибка при создании" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const tag = await Tags.destroy({ where: { id } });
      let tags = await Tags.findAll();
      res.json({ tags, message: "Тег удален" });
    } catch (error) {
      res.json({ message: "Ошибка при удалении" });
    }
  }

  async getAll(req, res) {
    try {
      let tags = await Tags.findAll();
      res.json({ tags, message: "Карточки получены" });
    } catch (error) {
      res.json({ message: "Ошибка при получении" });
    }
  }

  async getTag(req, res) {
    try {
      const { id } = req.params;
      const tag = await Card.findOne({ where: { id } });
      res.json({ tag, message: "Тег получен" });
    } catch (error) {
      res.json({ message: "Ошибка при получении" });
    }
  }
}

module.exports = new TagsControll();
