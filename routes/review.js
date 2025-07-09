const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { required } = require("joi");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");


const reviewController = require("../controllers/reviews.js");

//POST REVIEW ROUTE
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview));


module.exports = router;