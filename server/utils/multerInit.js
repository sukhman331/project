import multer from "multer";
import path from "path";
import fs from "fs";
import { IMAGE_NAME } from "./constants.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadTo = "assets/";

        // Ensure the upload folder exists
        if (!fs.existsSync(uploadTo)) {
            fs.mkdirSync(uploadTo, { recursive: true });
        }

        cb(null, uploadTo); // Set destination folder
    },
    filename: (req, file, cb) => {
        // Set custom filename
        const filename = `${IMAGE_NAME}${path.extname(file.originalname)}`;
        cb(null, filename);
    },
});

const uplaod = multer({storage});

export default uplaod;