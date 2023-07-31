import React from 'react';

const MyInput = ({value, setValue, onChange, ...props}) => {
    return (
        <input className='my-input' {...props} value={value} onChange={(e)=>onChange(e)}/>
    );
}

export default MyInput;
