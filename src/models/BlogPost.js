const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTabele = sequelize.define('BlogPost', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId:
        {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
        {
            timestamps: false,
            underscored: true,
            tableName: 'blog_posts'
        }
    );
    BlogPostTabele.associate = (models) => {
        BlogPostTabele.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    }

    return BlogPostTabele;
};
module.exports = BlogPostSchema