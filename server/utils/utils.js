import sharp from "sharp";
import fs from "fs";
import { IMAGE_NAME } from "./constants.js";

export async function toJPG(input) {

    const {output} = getImagePath(input);

    try {
        await sharp("."+input) 
            .jpeg({quality: 100})
            .toFile(output)

    } catch (error) {
        console.error("Error converting image to jpg:", error);

    };
};

export function getImagePath(input) {

    console.log(input, 'getImagePath')
    
    const parts = input.split("/");
    const filename = parts[parts.length - 1];

    const output = `${filename.split(".")[0]}.jpg`;

    const filePath = "/"+output;

    return {
        output,
        filePath
    };
}



