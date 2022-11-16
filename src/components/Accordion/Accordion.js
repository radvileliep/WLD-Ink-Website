import React from 'react';
import "./accordion.css";
import { useState } from 'react';

const Accordion = () => {

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }



    return (
    <>
        <div className='accordion'>

            {data.map((item, i) => (
                <div className='item'>
                    <div className='title' onClick={() => toggle(i)}>
                        <h2 className='acco-title'>{item.title}</h2>
                        <span className='plus'>{selected === i ? "-" : "+"}</span>
                    </div>
                    <div className={selected === i ? "para-accordion show" : "para-accordion"}>{item.text}</div>
                </div>
            ))}


        </div>
    
    </>
    )
}

const data = [
    {
        title: "Challange",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero."
    },
    {
        title: "Idea",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero."
    },
    {
        title: "Execution",
        text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero."
    }
]




export default Accordion