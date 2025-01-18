import express from "express";
import Members from "../models/member.js";


const addRouter = express.Router();

addRouter.post("/", async(req, res) => {

    const newMemberInfo = req.body

    console.log('new member info:', newMemberInfo);
    
    // Adding to database
    const newMember = new Members({...newMemberInfo});
    newMember.save();

    console.log('added to database')

});

export default addRouter;
