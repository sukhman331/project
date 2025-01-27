import { useState } from "react"
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
        <>
            <div className="flex flex-col items-center"> 
                <form className="flex flex-col flex-wrap relative
                    items-center justify-center max-w-2xl bg-form_bg shadow-2xl rounded-3xl"
                > 
                    <section className="topbottom rounded-t-3xl border-b-[1px]">
                        <span className="text-4xl text-text_color font-semibold shadow-2xl">Add New Package</span>
                    </section>
                    
                    <section className="bottom_line">
                        <input className="input_field big" type='text' placeholder="Name" onChange={(e) => setPackage({...packages    , name:e.target.value})}></input>
                    </section>

                    <section className="bottom_line">
                        <select className="input_field big" defaultValue='default' onChange={(e) => setPackage({...packages, type: e.target.value})}>
                            <option disabled value='default'>Select type</option>
                            <option value='day'>Day</option>
                            <option value='week'>Week</option>
                            <option value='month'>Month</option>
                        </select>
                    
                        <input className="input_field big" type='text' placeholder="Duration" onChange={(e) => setPackage({...packages, duration:e.target.value})}></input>
                    </section>
                    <section className="pt-9 pb-9">
                        <input className="input_field big" type='text' placeholder="Price" onChange={(e) => setPackage({...packages, price:e.target.value})}></input>
                    </section>
                    <section className="topbottom rounded-b-3xl border-t-[1px]">
                        <Button
                            missingFields={missingFields}
                            showMessage={setShowMessage}
                            clickFunc={addPackage}
                            value={packages}
                        >Create Package</Button>
                    </section>
                </form>
            </div>
                    {showMessage && <Message m='required fields missing'/>}
        </>
    )
}

export default Packages