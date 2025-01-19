import { useState } from "react";

import addMember from "../api/add.js";
import Message from "./Message.jsx";

function Add() {

    const [packages, setPackages] = useState(['apple', 'banana', 'pear']);

    const [member, setMember] = useState({
        name: null,
        mobile: null,
        address: null,
        dob: null,
        userPackage: null
    });

    const [showMessage, setShowMessage] = useState(false)

    const handleClick = event => {
        event.preventDefault();

        if (fieldsMissing()) return;

        // sends data to backend to add user
        addMember(member);
    };

    // checking if any of the required fields are missing
    const fieldsMissing = () => {
        return !member.name || !member.mobile || !member.dob || !member.userPackage
    };

    // shows message that required fields are missing when hovering over add member btn
    const mouseEnter = () => fieldsMissing() ? setShowMessage(true) : '';  

    const mouseLeave = () => setShowMessage(false);

    return (
        <div>
            <form className="ad-form">
                <input className="ad-name" type="text" placeholder="Name" onChange={(e) => setMember({...member, name: e.target.value})}></input>
                <input className="ad-mobile-no" type="tel" placeholder="Mobile No." onChange={(e) => setMember({...member, mobile: e.target.value})}></input>
                <input className="ad-address" type="text" placeholder="Address" onChange={(e) => setMember({...member, address: e.target.value})}></input>
                <input className="ad-dob" type="date" placeholder="Date of Birth" onChange={(e) => setMember({...member, dob: e.target.value})}></input>

                <select className="ad-package" defaultValue='default' onChange={(e) => setMember({...member, userPackage: e.target.value})}>
                    <option disabled value='default'></option>
                    {packages.map((pack, index) => (
                        <option value={pack} key={index}>{pack}</option>
                    ))}
                </select>

                <button className="ad-btn" onClick={handleClick} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Add Member</button>
            </form>
            {showMessage && <Message me='required fields missing'/>}
        </div>
    )
}

export default Add