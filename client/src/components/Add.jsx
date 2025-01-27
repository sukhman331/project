import { useState } from "react";

import addMember from "../api/add.js";
import Message from "./Message.jsx";
import { getPackage } from "../api/packages.js";
import Button from "./Button.jsx";

import { Link } from "react-router-dom"

import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { indianStates } from "../utils/constants.js";

// import addMember from 

function Add() {

    const [member, setMember] = useState({
        first: null,
        last: null,
        mobile: null,
        dob: null,
        gender: null,
        street: null,
        landmark: null,
        city: null,
        state: null,
        pincode: null,
        emergencyName: null,
        emergencyNumber: null,
        expiring: null,
        pack: null,
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
        <div className="flex flex-col items-center">
            <form className="flex flex-row flex-wrap relative
                items-center justify-center max-w-2xl bg-form_bg shadow-2xl rounded-3xl"
            >   
                <section className="topbottom rounded-t-3xl border-b-[1px]">
                    <span className="text-4xl text-text_color font-semibold shadow-2xl">Add New Member</span>
                </section>

                <section className="bottom_line">
                    {/* <p className="headers">Personal Information</p> */}
                    <section className="">
                        <input className="input_field big" type="text" placeholder="First Name" onChange={(e) => setMember({...member, first: e.target.value})}></input>
                        <input className="input_field big" type="text" placeholder="Last Name" onChange={(e) => setMember({...member, last: e.target.value})}></input>  
                    </section>
                    <section className="">
                        <input className="input_field small" type="tel" placeholder="Mobile No." onChange={(e) => setMember({...member, mobile: e.target.value})}></input>
                        <input className="input_field small" type="date" placeholder="Date of Birth" onChange={(e) => setMember({...member, dob: e.target.value})}></input>
                        <select className="input_field small" defaultValue='default' onChange={(e) => setMember({...member, gender: e.target.value})}>
                            <option disabled value='default' className="text-input_border" >Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>                  
                    </section>
                </section>   

                <section className="bottom_line">
                {/* <p className="headers">Address</p> */}

                    <section>
                        <input className="input_field big" type="text" placeholder="Street" onChange={(e) => setMember({...member, street: e.target.value})}></input>
                        <input className="input_field big" type="text" placeholder="Landmark" onChange={(e) => setMember({...member, landmark: e.target.value})}></input>
                    </section>

                    <section >
                        <input className="input_field small" type="text" placeholder="City" onChange={(e) => setMember({...member, city: e.target.value})}></input>
                        <select className="input_field small" defaultValue='default' onChange={(e) => setMember({...member, state: e.target.value})}>
                            <option disabled value='default'>Select State</option>
                            {indianStates?.map((state, index) => (
                                <option value={state} key={index}>{state}</option>
                            ))}
                        </select>
                        <input className="input_field small" type="text" placeholder="Pincode" onChange={(e) => setMember({...member, pincode: e.target.value})}></input>
                    </section>
                </section>
            
                <section className="bottom_line ">
                {/* <p className="headers">Emergency Contact</p> */}

                    <input className="input_field big" type="tel" placeholder="Emerengy Contact" onChange={(e) => setMember({...member, emergencyName: e.target.value})}></input>
                    <input className="input_field big" type="tel" placeholder="Emerengy Number" onChange={(e) => setMember({...member, emergencyNumber: e.target.value})}></input>
                </section>
                
                <section className="pt-9 flex flex-col justify-center items-center">
                    {/* <p className="headers">Membership Package</p> */}
                    <select className="input_field big" defaultValue='default' onChange={selectPackage}>
                        <option disabled value='default'>Select Package</option>
                        {data?.map((pack, index) => (
                            <option value={pack._id} data-duration={pack.duration} key={index}>{pack.name}</option>
                        ))}
                    </select>
                    <Link to="/package/add" className="text-primary font-semibold p-2.5 ">Add custom package</Link>
                </section>
                <section className="topbottom rounded-b-3xl border-t-[1px]">
                    <Button 
                        missingFields={fieldsMissing} 
                        showMessage={setShowMessage} 
                        clickFunc={addMember}
                        value={member}
                        >Add Member
                    </Button>
                </section>
            </form>
        </div>
            <p className="paragraph">Pack will last till: {member.expiring && (member.expiring).format("YYYY-MM-DD")}</p>
        {showMessage && <Message m='required fields missing'/>}
    </>
    )
}

export default Add