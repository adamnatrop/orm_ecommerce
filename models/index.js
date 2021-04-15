// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  onDelete: 'CASCADE',
  as:'productTOTags'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  trhough: {
    model: ProductTag,
    unique: false,
  },
  onDelete: 'CASCADE',
  as: 'tagToProduct'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
