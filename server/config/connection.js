const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Chris:12345%21%40%23%24%25@cluster0.7brun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || 'mongodb://localhost/BookSearchEngine', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
