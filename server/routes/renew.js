// API files to get members list 
import express from "express";
import Members from "../models/member.js";

const router = express.Router();

router.get("/", async(req, res) => {

    const query = req.query.q || '';
    
    const members = await Members.find({
        name: {$regex: query, $options: 'i'}
    });
    
    res.json(members);
})

router.post("/", async(req, res) => {

    const renewInfo = req.body;

    console.log(renewInfo)
})

export default router;