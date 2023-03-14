import React from "react";
function Keypad (){
    function HandlerEvent(){
        console.log("Entering password...")
    }
    
    return (
        <div>
            <input type = "password" onChange = {HandlerEvent}></input>
        </div>
    )
}

export default Keypad;