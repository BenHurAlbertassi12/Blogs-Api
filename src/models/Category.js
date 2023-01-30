const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    
    name: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  }, {
    tableName: 'categories',
    underscored: true,
  })
  return CategoryTable;
};
module.exports = CategorySchema