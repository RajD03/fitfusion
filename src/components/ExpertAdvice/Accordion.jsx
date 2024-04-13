import React, { useState } from 'react'
import { questions } from './Api';

const Accordion = () => {
    const [selected, setSetselected] = useState(null);

    const toggle = (item) => {
        if (selected === item) {
            return setSetselected(null)
        }
        setSetselected(item)
    }

    return <div className='wrapper' >
        <div className='main_heading' >
            <h1 className='accordion_title'>Take Expert Advice</h1>
        </div>
        <div className='accordion' >
            {questions.map((item, i) => (
                <div className='item' key={item.id}>
                    <div className='title' onClick={() => toggle(item)} >
                        <h2 className='questions'>{item.question}</h2>
                        <span> {selected === item ? '⬆️' : '🔽'} </span>
                    </div>
                    <div className={selected === item ? 'content show' : 'content'}> {item.answer} </div>
                </div>
            ))}
        </div>
    </div>
}

export default Accordion
