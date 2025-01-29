import { useEffect, useState } from "react";
import { getMessage, sendImageMessage } from "../api/send.js";
import getImageSrc from "../utils/getImageSrc.js";
import MessagePreview from "./MessagePreview.jsx";
import { useModalContext } from "../utils/modalContext.jsx";

function Send() {

    const [message, setMessage] = useState('Preview Message')
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

    const { setVisible } = useModalContext();


    function selectMembers() {

        console.log("select button clicked")
        setVisible({visible: true, path: "select_member"})

        
    }

    function handleFileSubmission(event) {

        const file = event.target.files[0];
        setImageName(file.name)
        setImage(file);
        getImageSrc(file, setImagePreview, setMessage);
        
    };

    return (
        <div className="flex flex-row flex-wrap">
            <div className="flex-1">
                Send Messages
                {message}
                <form>
                    <input placeholder="Message" className="input_field big" onChange={(e) => setMessage(e.target.value)}/>
                    <input placeholder="Number" id="recipient_number" className="input_field big" onChange={(e) => setNumber(e.target.value)}/>
                    <input placeholder="Image" type="file" accept="image/*"onChange={handleFileSubmission}/>
                </form>
                {/* <Button /> */}
                <button onClick={handleClick}>Send Message</button>
                <button onClick={selectMembers}>SELECT MEMBERS</button>
            </div>
            <MessagePreview preview={imagePreview} message={message}/>
        </div>
    )
}

export default Send;