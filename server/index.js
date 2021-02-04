const express = require('express');
const app = express();
const PORT = 8081 || process.env.PORT
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const {register, login} = require('./controllers/AuthenticationController')

mongoose.connect('mongodb://localhost:27017/snail-mail', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", ()=>{
    console.log("Database connected")
})



app.use(cors());
app.use(bodyParser.json())


app.post('/signup', register);




app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})