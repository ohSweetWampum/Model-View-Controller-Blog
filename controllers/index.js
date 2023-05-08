const router = require("express").Router();

const blogPostRoutes = require("./blogPostRoutes");
const commentRoutes = require("./commentRoutes");
const userAuthRoutes = require("./userAuthRoutes");

router.use("/api/blogposts", blogPostRoutes);
router.use("/api/comments", commentRoutes);
router.use("/api/users", userAuthRoutes);

module.exports = router;
