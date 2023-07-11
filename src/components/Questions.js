import React, { useEffect, useState } from "react";
import Data from "../database/data";

export default function Questions(){

    const [checked,setChecked] = useState(undefined)
    // In your case, it will return undefined because you didn't pass any initial state in the useState hook 
    const question = Data[0] 
    useEffect(() =>{
        console.log(question)
    })

    function onSelect(){
        console.log('radio button changed')
    }
    return (
        <div className="questions">
            <h2 className="text-light">{question.question}</h2>

            <ul key={question.id}>

                {
                    // displaying question one by one using map to iterate over the array
                    question.options.map((q,i) => (
                        <li key={i}>
                        <input 
                        type="radio" 
                        value={false}
                        name="options"
                        id={`q${i}`}
                        onChange={onSelect()}
                        
                        />
                        <label className="text-primary" htmlFor={`q${i}`}>{q}</label>
                        <div className="check checked"></div>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}