const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
sendingUser: {
    type: String,
    required: true
},
receivingUsers: [],
dateCreated: {
    type: Date
},
message: {
    type: String
},
timeDelay: {
    type: Number
},
dateSent: {
    type: Date
},
read: false,
archived: false,
attachments: [],




})

module.exports = mongoose.model('Message', MessageSchema)