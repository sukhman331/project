import { useEffect, useState } from "react";

import addMember from "../api/add.js";
import Message from "./Message.jsx";
import { getPackage } from "../api/packages.js";
import Button from "./Button.jsx";

import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";

// import addMember from 

function Add() {

    const [member, setMember] = useState({
        first: null,
        middle: null,
        last: null,
        mobile: null,
        street: null,
        city: null,
        state: null,
        pincode: null,
        dob: null,
        pack: null,
        expiring: null,
        gender: null,
        emergency: null,
    });

    const [showMessage, setShowMessage] = useState(false)

    const {data} = useQuery({
        queryKey: ["packages"],
        queryFn: getPackage
    })

    // checking if any of the required fields are missing
    const fieldsMissing = () => {
        return !member.first || !member.last || !member.mobile || !member.dob || !member.pack
    };

    const selectPackage = async event => {
        const duration = parseInt(event.target.options[event.target.selectedIndex].getAttribute('data-duration'));

        const now = dayjs();
        const expiring = now.add(duration, 'day') 

        setMember({...member, pack: event.target.value, expiring: expiring});

    }

    // input field styling

    return (    
        <>
            <form className="flex flex-row flex-wrap gap-2 ">
                <section>
                    <input className="inputFields" type="text" placeholder="First Name" onChange={(e) => setMember({...member, first: e.target.value})}></input>
                    <input className="inputFields" type="text" placeholder="Middle Name" onChange={(e) => setMember({...member, middle: e.target.value})}></input>
                    <input className="inputFields" type="text" placeholder="Last Name" onChange={(e) => setMember({...member, last: e.target.value})}></input>
                </section>
                <section>
                    <input className="inputFields" type="tel" placeholder="Mobile No." onChange={(e) => setMember({...member, mobile: e.target.value})}></input>
                    <input className="inputFields" type="date" placeholder="Date of Birth" onChange={(e) => setMember({...member, dob: e.target.value})}></input>
                    <select className="inputFields" defaultValue='default' onChange={(e) => setMember({...member, gender: e.target.value})}>
                        <option disabled value='default'>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </section>
                <input className="inputFields" type="text" placeholder="Street" onChange={(e) => setMember({...member, street: e.target.value})}></input>
                <input className="inputFields" type="text" placeholder="City" onChange={(e) => setMember({...member, city: e.target.value})}></input>
                <input className="inputFields" type="text" placeholder="State" onChange={(e) => setMember({...member, state: e.target.value})}></input>
                <input className="inputFields" type="text" placeholder="Pincode" onChange={(e) => setMember({...member, pincode: e.target.value})}></input>
                <input className="inputFields" type="tel" placeholder="Emerengy Number" onChange={(e) => setMember({...member, emergency: e.target.value})}></input>
                
                <select className="inputFields" defaultValue='default' onChange={selectPackage}>
                    <option disabled value='default'>Select Package</option>
                    {data?.map((pack, index) => (
                        <option value={pack._id} data-duration={pack.duration} key={index}>{pack.name}</option>
                    ))}
                </select>


            </form>
            <Button 
                missingFields={fieldsMissing} 
                showMessage={setShowMessage} 
                clickFunc={addMember}
                value={member}
                >Add Member</Button>
            <p>Pack will last till: {member.expiring && (member.expiring).format("YYYY-MM-DD")}</p>
        {showMessage && <Message m='required fields missing'/>}
    </>
    )
}

export default Add