const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class BlogPost extends Model {}

BlogPost.init(
  {
    // define columns( id:,category_name:)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blogpost_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    blogpost_content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "username",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blogpost",
  }
);

module.exports = BlogPost;
