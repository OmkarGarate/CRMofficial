const Designation = require('../models/DesignationModel')

const createDes = async(req, res) =>{
    const {desName, desCount, desType} = req.body

    try{
        const des = await Designation.create({
            desName: desName,
            desCount: desCount,
            desType: desType  
          })
      
          res.status(200).json(des)
    }catch(error){
        console.error("Error creating the Post", error);
        res.status(400).json({ error: 'Internal server error' });
    }
}

const getAllDes = async(req, res) =>{
    const des = await Designation.find({}).sort({createdAt: -1})
    res.status(200).json(des)
}

const updateDes = async(req, res) =>{
    const {id} = req.params

    let updateData = { ...req.body }

    const des = await Designation.findOneAndUpdate({_id: id},
        updateData
    )

    if(!des){
        return res.status(404).json({error: "No such Post"})
    }

    res.status(200).json(des)
}


const deleteDes = async (req, res) =>{
    const {id} = req.params
    const des = await Designation.findOneAndDelete({_id: id})

    if(!des){
        return console.log("No such post found")
    }

    res.status(200).json(des)
}

module.exports = {createDes, getAllDes, updateDes, deleteDes}