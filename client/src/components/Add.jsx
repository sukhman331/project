import { useState } from "react";


function Add() {

    const [packages, setPackages] = useState(['apple', 'banana', 'pear']);

    const [member, setMember] = useState({
        name: null,
        mobile: null,
        address: null,
        dob: null,
        userPackage: null
    });

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
                        <option key={index}>{pack}</option>
                    ))}
                </select>

                <button className="ad-btn">Add Member</button>
            </form>
        </div>
    )
}

export default Add