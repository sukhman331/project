import { useEffect, useState } from "react";
import { getMessage, sendMessage } from "../api/send.js";

function Send() {

    const send = {
        number: '919988619204',
        message: 'hello tai'
    }

    const [message, setMessage] = useState('')

    function handleClick() {
        sendMessage(send);
    }

    useEffect(() => {

        getMessage(setMessage);

    }, [])

    return (
        <div>
            Send Messages
            {message}
            <button onClick={handleClick}>Send Message</button>
        </div>
    )
}

export default Send;