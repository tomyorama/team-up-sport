'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var MatchSchema = new Schema({
    name: String,
    info: String,
    active: Boolean,
    competitionId: Schema.Types.ObjectId
});
module.exports = mongoose.model('Match', MatchSchema);