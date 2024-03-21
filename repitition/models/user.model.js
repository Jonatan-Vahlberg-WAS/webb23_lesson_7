const mongoose = require("mongoose");


// Mongoose schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String },
  age: { type: Number, required: true },
}, {
    timestamps: true
});

// Mongoose model
const User = mongoose.model("User", userSchema)

module.exports = User
