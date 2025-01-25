import { useState } from "react"
import '../style/packages.css'
import { addPackage } from "../api/packages";
import Button from "./Button";
import Message from "./Message";

function Packages() {
    
    const [packages, setPackage] = useState({
        name: '',
        type: null,
        duration: 0,
        price: 0
    });

    const [showMessage, setShowMessage] = useState(false)

    function missingFields() {
        return !packages.name || !packages.type || !packages.duration || !packages.price;
    };

    return (
        <div>
            <form className="package-form">

                <input className='pf-name' type='text' placeholder="Name" onChange={(e) => setPackage({...packages    , name:e.target.value})}></input>
                
                <select className="pf-select" defaultValue='default' onChange={(e) => setPackage({...packages, type: e.target.value})}>
                    <option disabled value='default'>Select type</option>
                    <option value='day'>Day</option>
                    <option value='week'>Week</option>
                    <option value='month'>Month</option>
                </select>
                
                <input className="pf-duration" type='number' placeholder="Duration" onChange={(e) => setPackage({...packages, duration:e.target.value})}></input>
                <input className="pf-price" type='number' placeholder="Price" onChange={(e) => setPackage({...packages, price:e.target.value})}></input>
                
                <Button
                    className='pf-btn'
                    missingFields={missingFields}
                    showMessage={setShowMessage}
                    clickFunc={addPackage}
                    value={packages}
                >Create Package</Button>

                {showMessage && <Message m='required fields missing'/>}
            </form>
        </div>
    )
}

export default Packages