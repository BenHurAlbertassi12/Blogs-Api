const UserSchema = (sequelize, DataTypes) => {
  const UserTabele = sequelize.define('User', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users'
    });

  UserTabele.associate = ( users) => {
    UserTabele.hasMany(users.BlogPost, {
      foreignKey: 'user_id'
    })
  }

  return UserTabele;
};
module.exports = UserSchema