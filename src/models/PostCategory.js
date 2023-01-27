const BlogPostSchema = (sequelize, DataTypes) => {
    const PostCatTabele = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        }
    }, {
        tableName: 'blog_post',
        timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
        tableName: 'employees',
        underscored: true,
    })
    PostCatTabele.associate =  (models)  => {
        models.BlogPost.belongsToMany(models.Category, {
                as: 'categories',
                through: PostCatTabele,
                foreignKey: 'post_id', 
                otherKey: 'category_id', 
            });
            models.Category.belongsToMany(models.BlogPost, {
                as: 'blog_posts',
                through: PostCatTabele,
                foreignKey: 'category_id',
                otherKey: 'post_id',
            });
        };


    return PostCatTabele;
};
module.exports = BlogPostSchema

// Os métodos de criação de associações que o Sequelize disponibiliza são:

// hasOne
// belongsTo
// hasMany
// belongsToMany
