const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  admin: { type: Boolean },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), required: true },
  local: { type: String },
  following: [{ type: mongoose.Types.ObjectId, required: true }],
  followers: [{ type: mongoose.Types.ObjectId, required: true }],
  pets: [{ type: mongoose.Types.ObjectId, required: true, ref: "Pet" }],
  posts: [{ type: mongoose.Types.ObjectId, required: true, ref: "Post" }],
});

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("User", userSchema);
