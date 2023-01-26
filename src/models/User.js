const UserSchema = (sequelize, DataTypes) => {
  const UserTabele = sequelize.define('User', {
    
    User: DataTypes.STRING,
    id: DataTypes.NUMBER,
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
  })
  return UserTabele;
};
module.exports = UserSchema