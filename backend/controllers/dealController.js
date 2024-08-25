const Bank = require("../models/Bank");
const Deal = require("../models/Deal");
const axios = require("axios");

// @desc    Fetch deals from bank's API and store them in the database
// @route   POST /api/deals/fetch-deals
// @access  Private (Admin)
exports.fetchDeals = async (req, res) => {
  try {
    const banks = await Bank.find({});

    for (let bank of banks) {
      if (bank.apiLink) {
        const response = await axios.get(bank.apiLink);
        const deals = response.data.products; // Adjust according to API response structure

        // Store the deals in the database
        for (let deal of deals) {
          await Deal.create({
            bank: bank._id,
            dealName: deal.producthighlight,
            dealDescription: deal.promotionoffer,
            dealCreditCard: deal.cardname,
            dealImage: deal.productleafleturl,
          });
        }
      }
    }

    res.status(200).json({ message: "Deals fetched and stored successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all deals to display on the website
// @route   GET /api/deals
// @access  Public
exports.getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find({});

    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
