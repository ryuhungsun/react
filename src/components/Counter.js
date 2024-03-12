import React, { useState } from "react";

const Counter = (props, e)=>{
    
    const [counter, setCounter] = useState(0);
 
    const increament =(e) =>{e.preventDefault();
        setCounter(counter+1);
    };

    return (
        <button onClick={increament}>
            {props.click1} {counter} {props.click2}
        </button>
    );
};

export default Counter;