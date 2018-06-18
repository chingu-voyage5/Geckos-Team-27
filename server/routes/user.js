const router = require("express").Router();
const user = require("../controllers/user");
const { catchErrors } = require("../utils");

/*
    @route GET /api/user/:id
    @desc get user's profile by id
    @access public
*/
router.get("/api/user/:id", catchErrors(user.profileById));

/*
    @route GET /api/user/all
    @desc get all users
    @access public
*/
router.get("/api/users", catchErrors(user.allProfiles));

/*
    @route PUT /api/current_user/:id
    @desc edit user's profile
    @access private
*/
router.patch("/api/current_user/:id", catchErrors(user.editUser));

module.exports = router;
