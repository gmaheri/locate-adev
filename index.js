const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const dotenv = require('dotenv')
const cors = require('cors');

//load env vars
dotenv.config({path : './config/config.env'});


//initialise express
const app = express();

//BodyParser
app.use(express.json());

//Enable cors
app.use(cors());

app.use('/api/v1/dev', require('./routes/dev'));


const PORT = process.env.PORT|| 4200 ;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
})
