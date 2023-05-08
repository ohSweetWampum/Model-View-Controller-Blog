const router = require("express").Router();
const { BlogPost, User, Comment } = require("../models");
const authRequired = require("../utils/auth");

// Render homepage with all blog posts
router.get("/", async (req, res) => {
  try {
    const allTheBlogPosts = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blogposts = allTheBlogPosts.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render dashboard with user's blog posts
router.get("/dashboard", authRequired, async (req, res) => {
  try {
    const usersBlogPosts = await BlogPost.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const userBlogposts = usersBlogPosts.map((post) =>
      post.get({ plain: true })
    );

    res.render("dashboard", {
      userBlogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET for new article page
router.get("/new", authRequired, async (req, res) => {
  try {
    res.render("add-article", {
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      userid: req.session.userId,
      email: req.session.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render login/signup page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

module.exports = router;
