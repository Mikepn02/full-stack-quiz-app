import React, { useEffect, useState } from "react";
import Data from "../database/data";
import { useSelector } from "react-redux";
// custom hook
import UseFetchQuestion from "../hooks/fetchQuestion";

export default function Questions(){

    const [checked,setChecked] = useState(undefined)
    // In your case, it will return undefined because you didn't pass any initial state in the useState hook 
    const [{isLoading,apiData,serverError}] = UseFetchQuestion()
    const question = Data[0] 
    const questions= useSelector(state => state.questions.queue[state.questions.trace]);
    const trace = useSelector(state => state.questions.trace)
    useEffect(() => {
        console.log(trace)
    })


    function onSelect(){
        // console.log('radio button changed')
    }
      if(isLoading) return <h3 className="text-light">isLoading</h3>
      if(serverError) return <h3 className="text-light">Server error</h3>

    return (
        <div className="questions">
            <h2 className="text-light">{question?.question}</h2>
            {/* this ? allow us to access property value only */}

            <ul key={questions?.id}>

                {
                    // displaying question one by one using map to iterate over the array
                    questions?.options.map((q,i) => (
                        <li key={i}>
                        <input 
                        type="radio" 
                        value={false}
                        name="options"
                        id={`q${i}`}
                        onChange={onSelect()}
                        
                        />
                        <label className="text-primary" htmlFor={`q${i}`}>{q}</label>
                        <div className="check"></div>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}