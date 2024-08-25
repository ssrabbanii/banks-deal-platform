const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    apiLink: {
      type: String,
      required: false,
    },
    helpRequests: [
      {
        message: { type: String, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Bank = mongoose.model("Bank", BankSchema);

module.exports = Bank;
