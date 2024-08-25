const User = require("../models/User");
const Bank = require("../models/Bank");

// @desc    Fetch all registered banks
// @route   GET /api/admin/banks
// @access  Private (Admin)
exports.fetchAllBanks = async (req, res) => {
  try {
    // Find all users with the role of 'bank'
    const banks = await User.find({ role: "bank" }).populate("bank");

    if (!banks) {
      return res.status(404).json({ message: "No banks found" });
    }

    // Send the list of banks back to the client
    res.json(banks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch banks" });
  }
};

// @desc    Fetch all API links from banks
// @route   GET /api/admin/apis
// @access  Private (Admin)
exports.fetchAllApis = async (req, res) => {
  try {
    // Find all banks and their associated API links
    const banks = await Bank.find({});

    if (!banks) {
      return res.status(404).json({ message: "No APIs found" });
    }

    // Send the list of APIs back to the client
    res.json(banks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch APIs" });
  }
};

// @desc    Delete a bank user
// @route   DELETE /api/admin/banks/:id
// @access  Private (Admin)
exports.deleteBank = async (req, res) => {
  try {
    const bank = await User.findById(req.params.id);

    if (!bank || bank.role !== "bank") {
      return res.status(404).json({ message: "Bank not found" });
    }

    await bank.remove();
    res.json({ message: "Bank removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete bank" });
  }
};
