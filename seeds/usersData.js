const { User } = require("../models");

const userData = [
  {
    email: "john@example.com",
    password: "p@ssw0rd1",
    username: "John Doe",
  },
  {
    email: "jane@example.com",
    password: "p@ssw0rd2",
    username: "Jane Smith",
  },
  {
    email: "bob@example.com",
    password: "p@ssw0rd3",
    username: "Sara Johnson",
  },
  {
    email: "sara@example.com",
    password: "p@ssw0rd4",
    username: "David Lee",
  },
  {
    email: "james@example.com",
    password: "p@ssw0rd5",
    username: "Emily Chen",
  },
];

const seedUserInfo = () => User.bulkCreate(userData);

module.exports = seedUserInfo;
