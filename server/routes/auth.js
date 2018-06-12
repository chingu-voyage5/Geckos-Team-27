const router = require("express").Router();
const passport = require("passport");
const auth = require("../controllers/auth");
const { catchErrors } = require("../utils");

/*
    @route POST /api/register
    @desc Register User via Email
    @access public
*/
router.post("/api/register", catchErrors(auth.register));

/*
    @route POST /api/login
    @desc Login User via passport local 
    @access public
*/
router.post("/api/login", auth.login);

/*
    @route GET /auth/google
    @desc Login user via Google
    @access private
*/
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

/*
  @route GET /auth/google/redirect
  @desc redirect google callback
  @access private
*/
router.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  auth.google_redirect
);

/*
  @route GET /api/current_user 
  @desc get current user's info after login
  @access public
*/
router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

/*
    @route GET /api/logout
    @desc Logout user
    @access private
*/
router.get("/api/logout", auth.logout);

module.exports = router;
