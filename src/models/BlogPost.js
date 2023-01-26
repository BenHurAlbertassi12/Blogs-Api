const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTabele = sequelize.define('BlogPost', {

        userId: DataTypes.NUMBER,
        id: DataTypes.NUMBER,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE
    }, {
        tableName: 'blog_post',
        underscored: true,
    })
    return BlogPostTabele;
};
module.exports = BlogPostSchema