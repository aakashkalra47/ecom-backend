const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: [{ type:    String }],
  price: { type: Number, required: true },
  color: { type: String, required: true },
  sizes: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  variants: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
});
module.exports = mongoose.model("product", productSchema);
