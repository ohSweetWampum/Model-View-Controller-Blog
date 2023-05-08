const router = require("express").Router();
const { Comment, User, BlogPost } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

// Get all comments
router.get("/", async (req, res) => {
  try {
    const getAllComments = await Comment.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    res.status(200).json(getAllComments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new comment
router.post("/", authRequired, async (req, res) => {
  try {
    const createComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(createComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a comment by its `id` value
router.delete("/:id", authRequired, async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deleteComment) {
      res
        .status(404)
        .json({ message: "We couldn't find a comment with that id" });
      return;
    }

    res.status(200).json(deleteComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
