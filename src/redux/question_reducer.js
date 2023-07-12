import { createSlice } from "@reduxjs/toolkit"

// initiliaze your store

//createSlice is used to automaticatlly create reducer and it relates to a specific set of data and actions within the store 's state.

export const questionReducer =  createSlice({
    // define slice called questions
    name:'questions',
    initialState:{
        queue:[],
        answers:[],
        trace:0
    },
    reducers: {
       startExamAction: (state, action) => {
          return {
            //state is going to create new property queue that why we added spread operator
            ...state,
            queue: action.payload //this is to get the user input value 
            // payload is the data that your reducer will use to update the state.
            // payload value is the data that you pass when dispatching the startExamAction action.
          }
       },
       moveNextAction: (state,action) => {
        return {
            ...state,
            trace: state.trace + 1
        }
       },
       movePrevAction: (state,action) => {
        return {
            ...state,
            trace: state.trace - 1
        }
       }
    }
})

export const {startExamAction,moveNextAction,movePrevAction} = questionReducer.actions;
export default questionReducer.reducer