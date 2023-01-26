const UserSchema = (sequelize, DataTypes) => {
  const UserTabele = sequelize.define('Category', {
    
    name: DataTypes.STRING,
    id: DataTypes.NUMBER,
  }, {
    tableName: 'categories',
    underscored: true,
  })
  return UserTabele;
};
module.exports = UserSchema