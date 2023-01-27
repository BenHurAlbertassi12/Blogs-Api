const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTabele = sequelize.define('BlogPost', {

        userId: DataTypes.NUMBER,
        id: DataTypes.NUMBER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE
    }, {
        tableName: 'blog_posts',
        underscored: true,
    })
    BlogPostTabele.associate = (models) => {
        BlogPostTabele.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    }

    return BlogPostTabele;
};
module.exports = BlogPostSchema