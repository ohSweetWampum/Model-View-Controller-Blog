const { userInfo } = require("../models");

const userData = [
  {
    email: "john@example.com",
    password: "p@ssw0rd1",
    username: "JohnDoe",
  },
  {
    email: "jane@example.com",
    password: "p@ssw0rd2",
    username: "JaneDoe",
  },
  {
    email: "bob@example.com",
    password: "p@ssw0rd3",
    username: "BobSmith",
  },
  {
    email: "sara@example.com",
    password: "p@ssw0rd4",
    username: "SaraJohnson",
  },
  {
    email: "james@example.com",
    password: "p@ssw0rd5",
    username: "JamesLee",
  },
];

const seedUserInfo = () => userInfo.bulkCreate(userData);

module.exports = seedUserInfo;
