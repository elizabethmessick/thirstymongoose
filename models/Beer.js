var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: String,
}, {
        timestamps: true
    });

// Create the model below
var beerSchema = new Schema({
    name: String,
    style: String,
    bars: [{ type: Schema.Types.ObjectId, ref: 'Bar' }],
    comments: [commentSchema]
}, {
        timestamps: true
    });

// this is called a hook 
beerSchema.post('remove', function (doc) {
    this.model('Bar').find(
        { beers: doc._id },
        function (err, bars) {
            bars.forEach(function (bar) {
                bar.beers.remove(doc._id);
                bar.save();
            });
        }
    );
});


module.exports = mongoose.model('Beer', beerSchema);