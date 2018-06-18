const router = require("express").Router();
const home = require("../controllers/home");
const { catchErrors } = require("../utils");

/*
    @route POST /api/homes/new
    @desc create new home 
    @access private
*/
router.post("/api/homes/new", catchErrors(home.newHome));

/*
    @route PUT /api/homes/:id
    @desc edit home by id
    @access private
*/
router.put("/api/homes/:id", catchErrors(home.editHome));

/*
    @route GET /api/homes/:id
    @desc get current home
    @access public
*/
router.get("/api/homes/:id", catchErrors(home.homeById));

/*
    @route GET /api/homes/all
    @desc get all homes
    @access public
*/
router.get("/api/homes", catchErrors(home.allHomes));

module.exports = router;
