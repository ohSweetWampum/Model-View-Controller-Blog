const router = require("express").Router();

const blogPostRoutes = require("./blogPostRoutes");
const commentRoutes = require("./commentRoutes");
const userAuthRoutes = require("./userAuthRoutes");

router.use("/blogposts", blogPostRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userAuthRoutes);

module.exports = router;
