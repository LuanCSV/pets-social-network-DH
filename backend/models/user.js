const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    admin: { type: Boolean },
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true, minlength: 6 },
    foto: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now() },
    local: { type: String },
    pets: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Pet' }],
    seguindo: [{ type: String, required: true }],
    seguidores: [{ type: mongoose.Types.ObjectId, required: true }],
    postagens: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Post' }],
});

module.exports = mongoose.model('User', userSchema);