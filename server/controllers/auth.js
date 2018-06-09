const google_redirect = (req, res) => {
  res.redirect("/dashboard");
};

const logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

module.exports = {
  google_redirect,
  logout
};
