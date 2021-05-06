const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path')

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8000

//log requests
app.use(morgan('tiny'))

//parse requests to body parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","html")

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/views/index.html");
})


app.listen(PORT, () => {console.log(`server is running on http://localhost:${PORT}`)} );