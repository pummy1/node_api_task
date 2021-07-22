const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    partner: String,
    date: String,
    time:String,
    count:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);