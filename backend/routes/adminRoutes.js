const express = require("express");
const router = express.Router();
const {
  fetchAllBanks,
  fetchAllApis,
  deleteBank,
} = require("../controllers/adminController");
const { protect, admin } = require("../middleware/authMiddleware");

// Fetch all registered banks
router.get("/banks", protect, admin, fetchAllBanks);

// Fetch all API links
router.get("/apis", protect, admin, fetchAllApis);

// Delete a bank user
router.delete("/banks/:id", protect, admin, deleteBank);

module.exports = router;
