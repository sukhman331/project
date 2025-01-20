import { useEffect, useState } from "react";

import addMember from "../api/add.js";
import Message from "./Message.jsx";
import { getPackage } from "../api/packages.js";
import Button from "./Button.jsx";

function Add() {

    const [packages, setPackages] = useState([]);

    const [member, setMember] = useState({
        name: null,
        mobile: null,
        address: null,
        dob: null,
        pack: null,
        expiring: null
    });

    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        getPackage(setPackages);
        
    }, []);

    // checking if any of the required fields are missing
    const fieldsMissing = () => {
        return !member.name || !member.mobile || !member.dob || !member.pack
    };

    const selectPackage = async event => {
        const today = new Date();

        const duration = parseInt(event.target.options[event.target.selectedIndex].getAttribute('data-duration'));

        const expiring = new Date(today);
        expiring.setDate(today.getDate() + duration);

        setMember({...member, pack: event.target.value, expiring: expiring});

    }

        return (
            <div>
                <form className="ad-form">
                    <input className="ad-name" type="text" placeholder="Name" onChange={(e) => setMember({...member, name: e.target.value})}></input>
                    <input className="ad-mobile-no" type="tel" placeholder="Mobile No." onChange={(e) => setMember({...member, mobile: e.target.value})}></input>
                    <input className="ad-address" type="text" placeholder="Address" onChange={(e) => setMember({...member, address: e.target.value})}></input>
                    <input className="ad-dob" type="date" placeholder="Date of Birth" onChange={(e) => setMember({...member, dob: e.target.value})}></input>

                    <select className="ad-package" defaultValue='default' onChange={selectPackage}>
                        <option disabled value='default'></option>
                        {packages.map((pack, index) => (
                            <option value={pack._id} data-duration={pack.duration} key={index}>{pack.name}</option>
                        ))}
                    </select>

                    <p>Pack will last till: {member.expiring && (member.expiring).toDateString()}</p>

                    <Button 
                        className='ad-btn' 
                        missingFields={fieldsMissing} 
                        showMessage={setShowMessage} 
                        clickFunc={addMember}
                        value={member}
                    >Add Member</Button>
                </form>
            {showMessage && <Message m='required fields missing'/>}
        </div>
    )
}

export default Add