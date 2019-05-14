const router = require("express").Router();
const passport = require("passport");
const authController = require("../controllers/controller.auth").authController;

//@route    GET /auth/google
//@desc     Google authentication
//@access   public
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

//@route    GET /auth/google/callback
//@desc     handle google authentication callback
//@access   public
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  authController.googleCallback
);

//@route    GET /auth/logout
//@desc     Logout
//@access   private
router.get("/logout", authController.logout);

module.exports = router;
