// =========== Модели баз данных

const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false},
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketClothes = sequelize.define('basket_clothes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Clothes = sequelize.define('clothes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false },
})

const ClothesInfo = sequelize.define('clothes_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false},
    description: { type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketClothes)
BasketClothes.belongsTo(Basket)

BasketClothes.hasOne(Clothes)
Clothes.belongsTo(BasketClothes)

Type.hasMany(Clothes)
Clothes.belongsTo(Type)

Brand.hasMany(Clothes)
Clothes.belongsTo(Brand)

Clothes.hasMany(Rating)
Rating.belongsTo(Clothes)

Clothes.hasMany(BasketClothes)
BasketClothes.belongsTo(Clothes)

Clothes.hasMany(ClothesInfo, {as: 'info'});
ClothesInfo.belongsTo(Clothes)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type,{through: TypeBrand})

module.exports = {
    User,
    Rating,
    Basket,
    BasketClothes,
    Clothes,
    ClothesInfo,
    Type,
    Brand,
    TypeBrand,
}