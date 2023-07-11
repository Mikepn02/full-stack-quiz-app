import React, { useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/Main.css'



export default function Main(){

    const inputRef = useRef(null)
    //useRef Hook allows you to persist values between renders
    return (
        <div className="container">
            <h1 className="title text-light">Quiz application</h1>

            <ol>
                <li>You will be asked 10 questions one after another</li>
                <li>10 points is awarded for the correct answer</li>
                <li>Each question has three opition.please choose only on option</li>
                <li>You can review and change answers before the quiz finish</li>
                <li>The result will be declared at the end of the quiz</li>
            </ol>

            <form id="form">
                 <input ref={inputRef} type="text" className="userid" placeholder="username"/>
            </form>

           <div className="start">
            {/* when the use clicks here will rendered to quiz */}
             <Link className="btn" to={'quiz'}>Start Quiz </Link>
           </div>
        </div>
    )
}