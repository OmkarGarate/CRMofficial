const Feed = require('../models/Feed')

const createFeed = async (req, res) => {
    const { profilePic, name, role, post } = req.body;
  
    try {
      const feed = await Feed.create({
        profilePic: profilePic,
        name: name,
        role: role,
        post: post
      });
  
      res.status(200).json(feed);
    } catch (error) {
      console.error("Error creating the Post", error);
      res.status(400).json({ error: 'Internal server error' });
    }
  };
  

const getAllFeed = async(req, res) =>{
    const feed = await Feed.find({}).sort({createdAt: -1})
    res.status(200).json(feed)
}

const updateFeed = async(req, res) =>{
    const {id} = req.params

    const feed = await Feed.findOneAndUpdate({_id: id},
        ...req.body
    )

    if(!feed){
        return res.status(404).json({error: "No such Post"})
    }

    res.status(200).json(feed)
}


const deleteFeed = async (req, res) =>{
    const {id} = req.params
    const feed = await Feed.findOneAndDelete({_id: id})

    if(!feed){
        return console.log("No such post found")
    }

    res.status(200).json(feed)
}

module.exports = {createFeed, updateFeed, getAllFeed, deleteFeed}