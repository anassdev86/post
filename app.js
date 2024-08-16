const express = require('express');
const userRouter = require('./routes/userRouter');
const cors = require('cors');
const app = express();

app.use(express.static(__dirname + '/public'));
// app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.use('/api/v1/posts', userRouter);


module.exports = app;