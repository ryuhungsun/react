import React, { useState, useEffect } from "react";

const Condition = (props)=>{
    
    const [conditon, setCondition] = useState(false);
    const toggle =(e) =>{e.preventDefault();
        setCondition(!conditon);
    }
    useEffect(()=>{
        console.log(conditon);
    }, [conditon]);

    const renderCondition = conditon ? <div>Teue</div>
                                     : <div>False</div>
    return (
        <div>
            {renderCondition}
            <button onClick={toggle}>Toggle</button>
        </div>
    );
};

export default Condition;