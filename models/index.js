// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: "categoryID",
});

Category.hasMany(Product, {
  foreignKey: "categoryID",
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "productID",
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tagID",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
