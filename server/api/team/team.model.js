'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var TeamSchema = new Schema({
    name: String,
    info: String,
    active: Boolean,
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        playing: Boolean
    }],
    owner: Schema.Types.ObjectId
});
module.exports = mongoose.model('Team', TeamSchema);