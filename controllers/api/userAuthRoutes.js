const router = require("express").Router();
const { User } = require("../../models");
const { authRequired } = require("../../utils/authenticator");

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const registerUser = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = registerUser.id;
      req.session.username = registerUser.username;
      req.session.loggedIn = true;

      res.status(200).json(registerUser);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login a user
router.post("/login", async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const loginUser = await User.findOne({
      where: { username: req.body.username },
    });
    

    console.log("Login user:", loginUser);

    if (!loginUser) {
      res.status(400).json({
        message: "Incorrect email or/and password. Please enter again.",
      });
      return;
    }

    const validPassword = await loginUser.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect email or/and password. Please enter again.",
      });
      return;
    }

    req.session.save(() => {
      req.session.user_id = loginUser.id;
      req.session.username = loginUser.username;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: loginUser, message: "Yahhh! You are logged in!" });
    });
  } catch (err) {
    console.error("Error in login route:", err);
    res.status(500).json(err);
  }
});

// Logout a user
router.post("/logout", authRequired, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
