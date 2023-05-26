import { useLocation, useNavigate } from "react-router-dom";
import useQuestionStore from "../../store/zustand";
import { useEffect } from "react";
import AnimateProvider from "../../components/AnimateProvider/AnimatePovider";


function Question(){
    const{fetchQuestion , question:questionData} = useQuestionStore();
    const {search} = useLocation();
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!questionData.length){
            fetchQuestion(search)
        }
    },[]);
    if(!questionData.length) return <p>Loading ....</p>

    return(
        <AnimateProvider className="max-w-xl mx-auto">
        <h1 className="text-base md:text-lg font-semibold mb-5 text-orange-900">
            Quizz info
        </h1>
        <div className="flex flex-col text-gray-900 space-y-3 text-xs md:text md:text-sm">
            <div className="flex space-x-5">
                <p className="min-w-[170px]">Number of Questions</p>
                <p className="font-bold">{questionData.length}</p>
            </div>
      <div className="flex space-x-5">
        <p className="min-w-[170px]">Category</p>
        <p className="font-bold">{questionData[0].category}</p>
      </div>
      <div className="flex space-x-5">
      <p className="min-w-[170px]">Difficulty</p>
      <p className="font-bold capitalize text-lime-600">{questionData[0].difficulty}</p>
      </div>
      <div className="flex space-x-5">
       <p className="min-width-[170px]">Time</p>
       <p className="font-bold">3min</p>
      </div>
        </div>
        <button
        disabled={!questionData}
        onClick={()=>{
            navigate(``);

        }}
        className="flex w-full rounded-full bg-orange-500 cursor-pointer disabled:bg-orange-500/50 disabled:cursor-not-allowed p-1 justify-center font-semibold md:font-bold text-base md:text-lg text-center mt-10 text-white hover:bg-orange-500"
        >
            Start
            
        </button>
        </AnimateProvider>
    )
}
export default Question