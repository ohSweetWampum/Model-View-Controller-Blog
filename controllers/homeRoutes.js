const router = require("express").Router();
const { BlogPost, User } = require("../models");
const { authRequired } = require("../utils/authenticator");

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

    res.render("mainPage", {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render a single blog post by its `id`
router.get("/blogposts/:id", async (req, res) => {
  try {
    const findBlogPost = await BlogPost.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        // Add any other associations here, e.g., comments
      ],
    });

    if (!findBlogPost) {
      res
        .status(404)
        .json({ message: "We couldn't find a blog post with that id" });
      return;
    }

    const blogpost = findBlogPost.get({ plain: true });

    res.render("viewSingleBlogPost", {
      blogpost,
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
    res.render("createBlogPost", {
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
  res.render("userLogin");
});

module.exports = router;
