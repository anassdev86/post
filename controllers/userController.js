const Post = require('./../models/postModel');


exports.getAllPosts = async (req, res) => {
    try{
        res.status(200).json({
            status: "success",
            message: "ok"
        });

    }catch(err){

    }
};


exports.createNewPost = async (req, res) => {
    try{
        console.log(req.body)
        // const newPost = await Post.create(req.body)
        
    res.status(201).json({
        status: 'sucess',
        message: 'OK',
        // result: newPost
    })
    }catch(err){
        res.status(401).json({
            status: 'Fail',
            message: err.message
        })
    }
};