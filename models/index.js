// import models
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");
const User = require("./User");

// User

// has many BlogPosts//
// has many Comments//

// BlogPost

// belongs to User//
// has many Comments//

// Comment

// belongs to User//
// belongs to BlogPost//

// Products belongsTo Category

//user to blogpost relationship
User.hasMany(BlogPost, {
  foreignKey: "user_id",
});

//user to comment relationship
User.hasMany(Comment, {
  foreignKey: "user_id",
});

//blogpost to user relationship
BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});
// blogpost to comment relationship
BlogPost.hasMany(Comment, {
  foreignKey: "user_id",
});
// comment to user relationship
Comment.belongsTo(User, {
  foreignKey: "blogpost_id",
});
// comment to blogpost relationship
Comment.belongsTo(BlogPost, {
  foreignKey: "blogpost_id",
});
module.exports = {
  BlogPost,
  Comment,
  User,
};
