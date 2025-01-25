import express from "express";
import Members from "../models/member.js";
import Packages from "../models/package.js";


const memberRouter = express.Router();

memberRouter.get("/", async(req, res) => {

    const list = await Members.find();

    res.json(list)

});

// add new member 
memberRouter.post("/", async(req, res) => {

    const newMemberInfo = req.body;

    const packageId = newMemberInfo.pack;
    const {_id} = await Packages.findOne({_id: packageId});
    
    // membering to database
    const newMember = new Members({...newMemberInfo, pack: _id});
    await newMember.save();

    console.log('added to database')

});

export default memberRouter;
