import { IMAGE_NAME } from "./constants.js";
import fs from "fs";

function deleteImage(EXTENSION) {

    fs.unlink('/project/server/assets/'+IMAGE_NAME+EXTENSION, (error) => {
        if (error) {
            console.error(`Error deleting ${IMAGE_NAME+EXTENSION}: ${error}`)
        } else {
            console.log(IMAGE_NAME+EXTENSION+" deleted")
        }
    });
}

export default deleteImage;