const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  owner_pet:{type:mongoose.Types.ObjectId, required:true, ref:'User'},
  pet_name: { type: String, required: true },
  pet_image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), required: true },
  birthday:{type:Date, required:false},
  pet_race:{type:String, required:true},
  pet_type:{type:String,required:true}
  


});

module.exports = mongoose.model("Pet", petSchema);