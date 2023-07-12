import React, { useEffect, useState } from "react"
import Data from "../database/data";
import * as Action from '../redux/question_reducer'
import { useDispatch } from "react-redux";
/* fetch question from fetch api and set value to store*/

const UseFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData,setGetData] = useState({isLoading: false,apiData:[],serverError:null});

    useEffect(() => {
        setGetData(prev => ({...prev,isLoading:true}));

        //async function fetch the backend data
        
        (async () => {
            try{
                let question = await Data;
                if(question.length > 0) {
                setGetData(prev => ({...prev,isLoading:false}))
                setGetData(prev => ({...prev,apiData:question}));
                 dispatch(Action.startExamAction(question));
                 // this dispatch was used to dispatch action to array question  from the data and This is the only way to trigger a state change
                 //dispatch function is being used to trigger an action to start an exam.
                }else{
                    throw new Error("No question available")
                }

            }catch(error){
                setGetData(prev => ({...prev,isLoading:true}))
                setGetData(prev => ({...prev,serverError:error}))
                console.log(error)
            }
        })();
            
    },[dispatch]);
    //The reason for calling dispatch at the end of the useEffect hook in this code is to ensure that the action is dispatched after the data retrieval from the backend is completed and the question variable is populated
    return [getData,setGetData]
};
export const  MoveNextQuestion = () => async(dispatch) => {
    // that will help to return function but with argument
    try{
        dispatch(Action.moveNextAction())
    }catch(error){
        console.log(error)
    }
};
export const MovePrevQuestion = () => async(dispatch) => {
    try{
          dispatch(Action.movePrevAction())
    }catch(error){
        console.log(error)
    }
}
export default UseFetchQuestion;