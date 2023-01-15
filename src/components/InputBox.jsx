import React from 'react'

function InputBox(props) {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <label className='mt-2' htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}
                className="p-2 rounded-md border border-solid border-gray-500 outline-none" />
        </div>
    )
}

export default InputBox
