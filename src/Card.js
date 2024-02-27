import React, { useState } from 'react'
import logo from "./logo.svg"
function Card() {
    const [input, setInput] = useState();
    return (
        <>
            <div className='bg-black w-60 h-80 mx-auto rounded-xl'>
                <div className='border-2'>
                    <img src={logo} alt="..." className='w-90 h-40 ' />
                </div>
                <div className='text-white'>
                    <span className='group hover:text-green-500 hover:uppercase'>Title of the Card</span>
                    <p>Basic Description of Card</p>
                </div>
            </div>
            <input
                type='text'
                id='name'
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
                className="bg-black text-white" />
            <p>{input}</p>
        </>
    )
}

export default Card
