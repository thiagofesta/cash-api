var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String
});

module.exports = mongoose.model('Account', AccountSchema);