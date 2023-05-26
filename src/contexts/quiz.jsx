import React, { createContext, useReducer }  from "react";
import {Queries} from '../constant/index';

const initalState = {
    Queries
}

export const Reducer = (state, action) => {
    switch (action.type) {
      case 'SET_QUESTIONS':
        return {
          ...state,
          questions: action.payload,
        };
      case 'SET_CURRENT_QUESTION':
        return {
          ...state,
          currentQuestion: action.payload,
        };
      case 'SET_ANSWERS':
        return {
          ...state,
          answers: action.payload,
        };
      default:
        return state;
    }
  };
  
  
export const QuizContext = createContext();
export const QuizProvider = ({children}) =>{
    const value = useReducer(Reducer,initalState)
     return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
     )
}