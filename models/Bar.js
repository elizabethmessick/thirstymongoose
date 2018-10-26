var mongoose = require('mongoose');
// var Course = require('../models/Course');

var Schema = mongoose.Schema;

// create the model below
var barSchema = new Schema({
    name: String,
    location: String,
    beers: [{ type: Schema.Types.ObjectId, ref: 'Beer' }]
}, {
        timestamps: true
    });

// this is called a hook 
studentSchema.post('remove', function (student) {
    var Course = this.model('Course');
    Course.find({ students: student._id }, function (err, courses) {
        courses.forEach(function (course) {
            course.students.remove(student._id);
            course.save();
        });
    });
});

module.exports = mongoose.model('Student', studentSchema);