const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    pets: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Pet' }],
    posts: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Post' }],
});

module.exports = mongoose.model('User', userSchema);