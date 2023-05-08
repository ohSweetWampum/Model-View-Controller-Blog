// const { Model, DataTypes } = require("sequelize");

// const sequelize = require("../config/connection.js");
// const bcrypt = require("bcrypt");

// class User extends Model {}

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true,
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [6],
//       },
//     },
//   },
//   {
//     hooks: {
//       beforeCreate: async (newUserData) => {
//         try {
//           newUserData.password = await bcrypt.hash(newUserData.password, 10);
//           return newUserData;
//         } catch (err) {
//           console.log(err);
//           return err;
//         }
//       },
//     },

//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "user",
//     indexes: [
//       {
//         unique: true,
//         fields: ["username"],
//       },
//     ],
//   }
// );

// module.exports = User;
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const bcrypt = require("bcrypt");

class User extends Model {
  async checkPassword(loginPw) {
    return await bcrypt.compare(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        try {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
      beforeUpdate: async (updatedUserData) => {
        try {
          updatedUserData.password = await bcrypt.hash(
            updatedUserData.password,
            10
          );
          return updatedUserData;
        } catch (err) {
          console.log(err);
          return err;
        }
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
    indexes: [
      {
        unique: true,
        fields: ["username"],
      },
    ],
  }
);

module.exports = User;
