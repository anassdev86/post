const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    time: Date,
    username:{
        type: String,
        unique: true,
        required: [true, 'Please enter username']
    },
    photo: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;