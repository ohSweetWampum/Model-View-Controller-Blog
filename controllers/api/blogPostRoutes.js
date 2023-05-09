const router = require("express").Router();
const { BlogPost, User, Comment } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

// Get a single blog post by its `id`
router.get("/:id", async (req, res) => {
  try {
    const findBlogPost = await BlogPost.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });

    if (!findBlogPost) {
      res
        .status(404)
        .json({ message: "We couldn't find a blog post with that id" });
      return;
    }
    console.log(allBlogpostData);
    const blogpost = findBlogPost.get({ plain: true });

    res.render("viewSingleBlogPost", {
      blogpost,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    const getAllBlogPosts = await BlogPost.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    res.status(200).json(getAllBlogPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new blog post
router.post("/", authRequired, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});
console.log("router:", router);
console.log("authRequired:", authRequired);
console.log("BlogPost:", BlogPost);
// Update a blog post by its `id`
router.put("/:id", authRequired, async (req, res) => {
  try {
    const updateBlogPost = await BlogPost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updateBlogPost[0]) {
      res
        .status(404)
        .json({ message: "We couldn't find a blog post with that id" });
      return;
    }

    res.status(200).json(updateBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a blog post by its `id`
router.delete("/:id", authRequired, async (req, res) => {
  try {
    const deleteBlogPost = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteBlogPost) {
      res
        .status(404)
        .json({ message: "We couldn't find a blog post with that id" });
      return;
    }

    res.status(200).json(deleteBlogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
