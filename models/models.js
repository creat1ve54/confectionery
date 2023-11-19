const sequelize = require('../db')
const { DataTypes } = require('sequelize')


const Role = sequelize.define('role', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    value: { type: DataTypes.STRING, unique: true, defaultValue: 'USER' },
})


const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    lastName: { type: DataTypes.STRING, FallowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    middleName: { type: DataTypes.STRING, allowNull: false },
    previousSurname: { type: DataTypes.STRING, defaultValue: '' },
    dataOfBirth: { type: DataTypes.STRING, defaultValue: '' },
    phone: { type: DataTypes.STRING, allowNull: false },
    phoneSecond: { type: DataTypes.STRING, defaultValue: '' },
    passport: { type: DataTypes.STRING, defaultValue: '' },
    dataOfIssue: { type: DataTypes.STRING, defaultValue: '' },
    residenceAddress: { type: DataTypes.STRING, defaultValue: '' },
    residentialAddress: { type: DataTypes.STRING, defaultValue: '' },
    whoIssuedThePassport: { type: DataTypes.STRING, defaultValue: '' },
    placeOfWorOrStudy: { type: DataTypes.STRING, defaultValue: '' },
    officePhone: { type: DataTypes.STRING, defaultValue: '' },
    positionOrSpecialty: { type: DataTypes.STRING, defaultValue: '' },
    howDidYouFindOut: { type: DataTypes.STRING, defaultValue: '' },
    roles: { type: DataTypes.ARRAY(DataTypes.STRING) },
})



Role.hasOne(User)
User.belongsTo(Role)

module.exports = {
    User,
    Role,
}