const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/sttock-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});