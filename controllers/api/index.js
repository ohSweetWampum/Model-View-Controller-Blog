const router = require("express").Router();
const blogPostRoutes = require("./blogPostRoutes");
const commentRoutes = require("./commentRoutes");
const userAuthRoutes = require("./userAuthRoutes");

router.use("/blogPosts", blogPostRoutes);
router.use("/comments", commentRoutes);
router.use("/userAuths", userAuthRoutes);

module.exports = router;
