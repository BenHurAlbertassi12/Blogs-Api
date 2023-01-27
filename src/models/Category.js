const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    
    name: DataTypes.STRING,
    id: DataTypes.NUMBER,
  }, {
    tableName: 'categories',
    underscored: true,
  })
  return CategoryTable;
};
module.exports = CategorySchema