import express from "express";
import Members from "../models/member.js";
import Packages from "../models/package.js";


const addRouter = express.Router();

addRouter.post("/", async(req, res) => {

    const newMemberInfo = req.body

    console.log('new member info:', newMemberInfo);

    const packageId = newMemberInfo.pack;

    console.log(packageId, 'package id')

    const {_id} = await Packages.findOne({_id: packageId})

    console.log(_id, 'user package')
    
    // Adding to database
    const newMember = new Members({...newMemberInfo, pack: _id});
    await newMember.save();

    console.log('added to database')

});

export default addRouter;
