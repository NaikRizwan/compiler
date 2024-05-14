// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: String,
  img: String,
  loggedIn: Boolean,
  totalPoints: { type: Number, default: 0 }, // Add total points
  compilationHistory: [
    // Array to store compilation history
    {
      language: String,
      difficulty: String,
      code: String,
      result: String,
      success: Boolean,
      points: Number,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Compilation", userSchema);
