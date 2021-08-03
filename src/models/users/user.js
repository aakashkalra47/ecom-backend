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
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      size:{type:String,required:true}
    }
    ,
  ],
  address:[
    {
      address:{type:String},  
      city:{type:String},
      state:{type:String},
      landmark:{type:String},  
      pincode:{type:Number},  
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);
