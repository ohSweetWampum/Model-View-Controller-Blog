const authRequired = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    next();
  }
};

const authNotRequired = (req, res, next) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  } else {
    next();
  }
};

module.exports = { authRequired, authNotRequired };
