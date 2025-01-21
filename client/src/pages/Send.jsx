import { useEffect, useState } from "react";
import { getMessage, sendMessage } from "../api/send.js";

function Send() {

    const [message, setMessage] = useState('')
    const [number, setNumber] = useState('')

    function handleClick() {

        const send = {
            number: number,
            message: message
        }

        sendMessage(send);
    }

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

            </form>
            <button onClick={handleClick}>Send Message</button>
        </div>
    )
}

export default Send;