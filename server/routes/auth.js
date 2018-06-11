const router = require("express").Router();
const passport = require("passport");
const auth = require("../controllers/auth");

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
    @route GET /api/logout
    @desc Logout user
    @access private
*/
router.get("/api/logout", auth.logout);

module.exports = router;