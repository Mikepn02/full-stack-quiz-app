import { create } from "zustand";
import { persist } from "zustand/middleware";

const useQuestionStore = create(
  persist(
    (set) => ({
      question: [],
      userAnswer: [],
      error: null,
      totalTime: 0,
      trueAnswer: 0,
      falseAnswer: 0,
      auth: {},
      page: 1,
      fetchQuestion: async (question) => {
        try {
          // const response = await fetch(`https://opentdb.com/api.php${question}`);
          const response = await fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
          const data = await response.json();
           return set((state) => ({ ...state, question: data.results }))
           .then(loadedQuestion => {
              console.log(loadedQuestion.results);
              loadedQuestion.results.map(loadedQuestion => {
                  const formattedQuestions = {
                    question: loadedQuestion.question
                  }
                  const answerChoices  = [...loadedQuestion.incorrect_answer] 
                  formattedQuestions.answer  = Math.floor(Math.random()*3) +1;
                  answerChoices.splice(formattedQuestions.answer -1,0,loadedQuestion.correct_answer);
                  answerChoices.forEach((choice,index)=>{
                      formattedQuestions["choice" + (index+1)] =choice
                  })
                  return formattedQuestions
              })
            
           })
        } catch (error) {
          return set((state) => ({ ...state, error: error }));
        }
      },

      authUser: (auth) => set((state) => ({ ...state, auth })),
      addAnswer: ({ question, answer }) =>
        set((state) => ({
          ...state,
          userAnswer: [...state.userAnswer, { question, answer }],
        })),
      trueAction: () =>
        set((state) => ({ ...state, trueAnswer: state.trueAnswer + 1 })),
      falseAction: () =>
        set((state) => ({ ...state, falseAnswer: state.falseAnswer + 1 })),
      logoutUser: () =>
        set({
          question: [],
          userAnswer: [],
          error: null,
          totalTime: 0,
          trueAnswer: 0,
          falseAnswer: 0,
          auth: {},
          page: 1,
        }),
      resetQuestion: () =>
        set((state) => ({
          ...state,
          question: [],
          trueAnswer: 0,
          falseAnswer: 0,
          error: null,
          page: 1,
        })),
      setTimeStamp: (time) =>
        set((state) => ({
          ...state,
          totalTime:time,
        })),
      nextPage: () =>
        set((state) => ({
          ...state,
          page: state.page + 1,
        })),
    }),
    {
      name: "question-storage",
    }
  )
);

export default useQuestionStore;
