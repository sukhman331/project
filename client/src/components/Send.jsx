import { useEffect, useState } from "react";
import { getMessage, sendImageMessage } from "../api/send.js";
import getImageSrc from "../utils/getImageSrc.js";

function Send() {

    const [message, setMessage] = useState('')
    const [number, setNumber] = useState('')
    const [imagePreview, setImagePreview] = useState()
    const [image, setImage] = useState()
    const [imageName, setImageName] = useState()

    function handleClick() {
        
        const send = {
            number,
            message,
            image: imageName
        }
        const newForm = new FormData;
        newForm.append("image", image)
        newForm.append("data",JSON.stringify(send));

        console.log(send)

        sendImageMessage(newForm);
    }

    function handleFileSubmission(event) {

        const file = event.target.files[0];
        setImageName(file.name)
        setImage(file);
        getImageSrc(file, setImagePreview, setMessage);
        
    };

    useEffect(() => {

        getMessage(setMessage);

    }, [])

    return (
        <div>
            Send Messages
            {message}
            <form>
                <input placeholder="Message" onChange={(e) => setMessage(e.target.value)}/>
                <input placeholder="Number" onChange={(e) => setNumber(e.target.value)}/>
                <img alt="Select image to preview" src={imagePreview}/>
                <input placeholder="Image" type="file" accept="image/*"onChange={handleFileSubmission}/>
            </form>
            <button onClick={handleClick}>Send Message</button>
        </div>
    )
}

export default Send;