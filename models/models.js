const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Admin = sequelize.define("admin", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
    defaultValue: "",
  },
  password: { type: DataTypes.STRING, allowNull: true, defaultValue: "" },
});

const Card = sequelize.define("card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cardName: { type: DataTypes.STRING, allowNull: true, defaultValue: "" },
  cardNameTranslate: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
  },
  price: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  priceSale: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  rating: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  tags: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
  category: { type: DataTypes.STRING, allowNull: true, defaultValue: "" },
  description: { type: DataTypes.STRING, allowNull: false, defaultValue: "" },
  count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  photos: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "",
  },
});

//связующая таблица
const TypeCard = sequelize.define("type_card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// Role.hasOne(User);
// User.belongsTo(Role);

Admin.belongsToMany(Card, { through: TypeCard }); //Многие ко многим
Card.belongsToMany(Admin, { through: TypeCard });

module.exports = {
  Admin,
  Card,
  TypeCard,
};
