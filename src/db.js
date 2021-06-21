const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/ecom", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db connected");
  })
  .catch((e) => {
    console.log("error in connecting to db", e);
  });
