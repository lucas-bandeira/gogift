import React from "react";

export default function Input({label,name}) {
    return (
    <div className="my-2 flex flex-col w-full">
        <label htmlFor={name} className='font-bold'>{label}</label>
        <input type="text" id={name} className="border-2 p-2 rounded-xl w-full" required/>
    </div>
    );  
    
}




