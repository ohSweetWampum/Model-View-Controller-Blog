const seedBlogPosts = require("./blogPostData");
const seedComments = require("./commentData");
const seedUserInfo = require("./usersData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedBlogPosts();
  console.log("\n----- BLOGPOSTS SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  await seedUserInfo();
  console.log("\n----- USERS SEEDED -----\n");

  process.exit(0);
};

seedAll();
