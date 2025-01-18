import { useState } from "react"
import '../style/packages.css'

function Packages() {
    
    const [packages, setPackage] = useState({
        name: '',
        type: null,
        duration: 0,
        price: 0
    });

    function createPackage(event) {
        event.preventDefault();

        console.log(packages)
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
                
                <button className="pf-btn" onClick={createPackage}>Create Package</button>
            </form>
        </div>
    )
}

export default Packages