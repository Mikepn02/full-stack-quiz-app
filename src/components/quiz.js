import React, { useEffect } from "react";
import Questions from "./Questions";


// redux store import
import {useSelector,useDispatch} from 'react-redux';
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/fetchQuestion";




export default function Quiz(){
    const state = useSelector(state => state);
    const {queue,trace } = useSelector(state => state.questions)
    
    const dispatch = useDispatch();
    
    //useSelector is use to access or extract state component from redux store

    
    useEffect(() => {
        console.log(state)
    })

    // next button event handler

    function onNext(){
        console.log("on next click");
        // updating trace value by one using move next action
        if(trace < queue.length) {
            dispatch(MoveNextQuestion())
        }
        
    }
    // next button event handler
    function onPrev(){
        console.log("on prev click")
        if(trace > 0){
            dispatch(MovePrevQuestion())
        }
        
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