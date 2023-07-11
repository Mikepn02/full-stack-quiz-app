import React, { useEffect } from "react";
import Questions from "./Questions";


// redux store import
import {useSelector} from 'react-redux';




export default function Quiz(){
    //useSelector is use to access or extract state component from redux store

    const state = useSelector(state => state)
    useEffect(() => {
        console.log(state)
    })

    // next button event handler

    function onNext(){
        console.log("on next click")
    }
    // next button event handler
    function onPrev(){
        console.log("on prev click")
    }
    return (
        <div className="container">
            <h1 className="title text-light">Quiz application</h1>

            {/* display questions */}
            <Questions></Questions>

            <div className="grid">
                <button className="btn prev" onClick={onPrev}>Prev</button>
                <button className="btn next" onClick={onNext}>Next</button>
            </div>
        </div>
    )
}