const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
username: {
    type: String,
    required: true
},
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
}



})