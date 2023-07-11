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
          }
       }
    }
})

export const {startExamAction} = questionReducer.actions;
export default questionReducer.reducer