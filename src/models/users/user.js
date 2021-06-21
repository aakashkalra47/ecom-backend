const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  cart: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      size:{type:String,required:true}
    }
    ,
  ],
});

module.exports = mongoose.model("User", UserSchema);
