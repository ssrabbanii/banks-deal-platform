const mongoose = require("mongoose");

const DealSchema = new mongoose.Schema(
  {
    bank: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bank",
      required: true,
    },
    dealName: {
      type: String,
      required: true,
    },
    dealDescription: {
      type: String,
      required: true,
    },
    dealCreditCard: {
      type: String,
      required: true,
    },
    dealImage: {
      type: String,
      required: false,
    },
    promotionStartDate: {
      type: Date,
      required: true,
    },
    promotionEndDate: {
      type: Date,
      required: true,
    },
    customerServiceHotline: {
      type: String,
      required: false,
    },
    productLeafletUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Deal = mongoose.model("Deal", DealSchema);

module.exports = Deal;
