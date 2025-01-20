// API files to get members list 
import express from "express";
import Packages from "../models/package.js";

const packageRouter = express.Router();

packageRouter.get("/", async (req, res) => {

    const packages = await Packages.find();

    res.json(packages);

})

packageRouter.post("/", async (req, res) => {

    const newPackage = req.body;

    console.log(newPackage)

    try {
        const p = new Packages({...newPackage});
        await p.save();
        return res.status(201).json({ message: "Package created successfully", package: newPackage });

    } catch (error) {

        console.error("Error adding package:", error);
        return res.status(500).json({ message: "Failed to create package", error: error.message });
    };
    
});

export default packageRouter;

