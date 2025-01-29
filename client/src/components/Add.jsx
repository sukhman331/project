import { useState } from "react";

import addMember from "../api/add.js";
import { getPackage } from "../api/packages.js";
import Button from "./Button.jsx";

import { Link } from "react-router-dom"

import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { indianStates } from "../utils/constants.js";
import { useModalContext } from "../utils/modalContext.jsx";
import Button2 from "./Button2.jsx";

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

    const { visible, setVisible } = useModalContext();
    function handleClick() {
        
        console.log("div clikced")
        setVisible(!visible.visible)
    };
    function customPackage() {
        
        console.log("custom clikced")
        setVisible({visible: true , path: "add_package"})
    };

    // input field styling

    return (    
        <>
            <form className="flex flex-col flex-wrap 
             place-items-center justify-center max-w-2xl bg-form_bg shadow-2xl rounded-3xl"
            >   
                <section className="p-5 pt-8">
                    <span className="text-6xl text-text_color font-bold shadow-2xs">Add New Member</span>
                </section>

                <section className="bottom_line">
                    {/* <p className="headers">Personal Information</p> */}
                    <section className="form_section">
                        <input className="input_field big" type="text" placeholder="First Name" onChange={(e) => setMember({...member, first: e.target.value})}></input>
                        <input className="input_field big" type="text" placeholder="Last Name" onChange={(e) => setMember({...member, last: e.target.value})}></input>  
                    </section>
                    <section className="form_section">
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

                    <section className="form_section">
                        <input className="input_field big" type="text" placeholder="Street" onChange={(e) => setMember({...member, street: e.target.value})}></input>
                        <input className="input_field big" type="text" placeholder="Landmark" onChange={(e) => setMember({...member, landmark: e.target.value})}></input>
                    </section>

                    <section className="form_section">
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
            
                <section className="bottom_line form_section">
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
                    <a onClick={customPackage} className="text-primary font-semibold p-2.5 ">Add custom package</a>
                </section>
                <section className="bottom">
                    <Button2 clickFunc={handleClick}>Cancel</Button2>
                    <Button 
                        missingFields={fieldsMissing} 
                        showMessage={setShowMessage} 
                        clickFunc={addMember}
                        value={member}
                        exit={handleClick}
                        >Add Member
                    </Button>
                </section>
            </form>
    </>
    )
}

export default Add