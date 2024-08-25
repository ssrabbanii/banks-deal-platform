const express = require("express");
const router = express.Router();
const {
  fetchDeals,
  getAllDeals,
  getDealById,
} = require("../controllers/dealController");
const { protect, admin } = require("../middleware/authMiddleware");

// @route   POST /api/deals/fetch-deals
// @desc    Fetch deals from bank's API and store them in the database
// @access  Private (Admin)
router.post("/fetch-deals", protect, admin, fetchDeals);

// @route   GET /api/deals
// @desc    Get all deals to display on the website
// @access  Public
router.get("/", getAllDeals);

// Get a specific deal by ID
router.get("/:id", getDealById);

module.exports = router;
