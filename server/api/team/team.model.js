'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var TeamSchema = new Schema({
    name: String,
    info: String,
    active: Boolean,
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
module.exports = mongoose.model('Team', TeamSchema);