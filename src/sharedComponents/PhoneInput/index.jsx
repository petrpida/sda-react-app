import React, { useState } from "react";
import NavButton from "../NavButton";


export default function PhoneInput() {
    const [inputValue, setInputValue] = useState("")
    const [data, setData] = useState()

    return (
        <div>
            <input placeholder="phone number" type="text" onChange={function(e) {
                setInputValue(e.target.value)
            }} />
            <button  type="submit" onClick={function() {
                fetch(`https://api.veriphone.io/v2/verify?phone=${inputValue}&key=F7C3EFC4BCD341E78BDDDA310CD0D2EB`)
                .then((response) => response.json())
                .then((responseData) => {
                   console.log(responseData) 
                   setData(responseData)
                })
            }}>validate</button>

            {data && data.phone_valid && 
            <div>
            <h4>This is valid phone number</h4>
            <p>Country: {data.phone_region}</p>
            <p>Phone type: {data.phone_type}</p>
            <p>Carrier: {data.carrier}</p>

            </div>
            }  
            {data && !data.phone_valid && <h4>This is NOT valid phone number</h4>}         

            <NavButton name="home" link="/"/>
        </div>
    )
}