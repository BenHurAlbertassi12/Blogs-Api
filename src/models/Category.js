const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'categories'
    },
  );
  return CategoryTable;
};
module.exports = CategorySchema