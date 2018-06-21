const router = require("express").Router();
const reference = require("../controllers/reference");
const { catchErrors } = require("../utils");

/*
    @route GET /api/references
    @desc get all references
    @access public
*/
router.get("/api/references", catchErrors(reference.allReferences));

/*
    @route GET /api/references/:id
    @desc get current reference
    @access public
*/
router.get("/api/references/:id", catchErrors(reference.referenceById));

/*
    @route POST /api/references/new
    @desc create new reference 
    @access private
*/
router.post("/api/references/new", catchErrors(reference.newReference));

/*
    @route PUT /api/references/:id
    @desc edit reference by id
    @access private
*/
router.put("/api/references/:id", catchErrors(reference.editReference));

module.exports = router;
