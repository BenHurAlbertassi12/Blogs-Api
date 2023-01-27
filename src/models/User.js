const UserSchema = (sequelize, DataTypes) => {
  const UserTabele = sequelize.define('User', {
    
    User: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
    timestampe: false
  })
  UserTabele.associate = ( users) => {
    UserTabele.hasMany(users.BlogPost, {
      foreignKey: 'user_id'
    })
  }

  return UserTabele;
};
module.exports = UserSchema