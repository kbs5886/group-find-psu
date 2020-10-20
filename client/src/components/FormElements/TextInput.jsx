import React from 'react';

const TextInput = (props) => {
    return(
        <label>
            <span  className='block px-4'>
                {props.fieldName}
            </span>
            <input
            className="w-64 h-8 border border-gray-400 pl-4 mb-3 rounded-2xl placeholder-gray-400 text-sm"
            type={props.type}
            placeholder={props.placeholder}
            required = {props.required}
            minLength = {props.minLength}
            onChange = {props.change}
            />
        </label>
    )
}

export default TextInput