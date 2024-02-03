const mongoose = require('mongoose');

const DB_URL = process.env.DATABASE_URL;
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Db connected');
  })
  .catch((e) => {
    console.log('error in connecting to db', e);
  });
