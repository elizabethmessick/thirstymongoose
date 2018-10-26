var mongoose = require('mongoose');
// It used to be necessary to set the mongoose library to avoid
// warnings. Not anymore with ver. 5.x
// mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/thirstymongoose',
    { useNewUrlParser: true }
);

var db = mongoose.connection;
db.once('open', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});