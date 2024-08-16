const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/posts')
.then(res => console.log('DATABASE CONNECTED :) '))
.catch(err => console.log(err.message));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`SERVER RUN ${PORT}`));