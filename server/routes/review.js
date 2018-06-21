const router = require("express").Router();
const review = require("../controllers/review");
const { catchErrors } = require("../utils");

/*
    @route GET /api/reviews
    @desc get all reviews
    @access public
*/
router.get("/api/reviews", catchErrors(review.allReviews));

/*
    @route GET /api/reviews/:id
    @desc get current review
    @access public
*/
router.get("/api/reviews/:id", catchErrors(review.reviewById));

/*
    @route POST /api/reviews/new
    @desc create new review 
    @access private
*/
router.post("/api/reviews/new", catchErrors(review.newReview));

/*
    @route PUT /api/reviews/:id
    @desc edit review by id
    @access private
*/
router.put("/api/reviews/:id", catchErrors(review.editReview));

module.exports = router;
