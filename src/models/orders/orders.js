const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  amount: { type: Number, required: true },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "product",
      },
      size: { type: String, required: true },
      // qunatity:{type:Number,required:true},
    },
  ],
  paymentStatus: { type: Boolean, required: true },
  paymentMode: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model("orders", UserSchema);
