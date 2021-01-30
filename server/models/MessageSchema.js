const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
sendingUser: {
    type: String,
    required: true
},
receivingUser: {
    type: String,
    require: true
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