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
                fetch(`https://api.veriphone.io/v2/verify?phone=${inputValue}&key=9E2ABBC635534240938B1886027F3376`)
                .then((response) => response.json())
                .then((responseData) => {
                   setData(responseData)
                })
            }}>validate</button>

            {/* {data.phone_valid && <h6>This is valid phone number</h6>}  
            {!data.phone_valid && <h6>This is NOT valid phone number</h6>}          */}

            <NavButton name="home" link="/"/>
        </div>
    )
}