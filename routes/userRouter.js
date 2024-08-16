const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');
const upload = require('./../controllers/multerController');

router
.route('/')
.get(userController.getAllPosts)
.post(upload.single('photo'), userController.createNewPost);

module.exports = router;