import React from "react";
import '../styles/Result.css'
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";



export default function Result(){

    function onRestart(){
        console.log("on restart")
    }
    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            <div className="result flex-center">
                  <div className="flex">
                    <span>Username</span>
                    <span className="bold">Daily tuition</span>
                  </div>
                  <div className="flex">
                    <span>Total Quiz points: </span>
                    <span className="bold">50</span>
                  </div>
                  <div className="flex">
                    <span>Total question: </span>
                    <span className="bold">10</span>
                  </div>
                  <div className="flex">
                    <span>Total attemps: </span>
                    <span className="bold">03</span>
                  </div>
                  <div className="flex">
                    <span>Total earn points: </span>
                    <span className="bold">30</span>
                  </div>
                  <div className="flex">
                    <span>Quiz result: </span>
                    <span className="bold">Passed</span>
                  </div>
            </div>
            <div className="start">
                <Link className="btn" to={'/'} onClick={onRestart()}>Restart </Link>
            </div>
            <div className="container">
                {/* result table */}
                <ResultTable></ResultTable>
            </div>
        </div>
    )
}