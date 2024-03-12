import React from "react";

const InputField = ({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}) => {
    return(
        <>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <br />
            <div style={{ color: 'red' }}>{errorMessage}</div>
            {/* <button type="submit">영화추가</button> */}
        </>
    )
}

export default InputField;