import { useEffect, useState } from "react";
import { Types ,Level } from "./constant";
import useQuestionStore from "./store/zustand";
import { Navigate,useNavigate } from "react-router-dom";
import AnimateProvider from "./components/AnimateProvider/AnimatePovider";



function Apps(){
    const [type, setType] = useState(Types[0].id)
    const [level,setLevel] = useState(Level[0]);
    const {question} = useQuestionStore()
    const navigate = useNavigate()
    console.log("The questions:",question);
    const { fetchQuestion } = useQuestionStore();
    useEffect(() => {
        console.log("fetch Questions");
        fetchQuestion();
        console.log(question);
      }, [])

    const handleBegin = () => {
        const question = `amount=5&category=${type}&difficulty=${level}&type=multiple`;
        navigate(`/question?${question}`,{
            replace: false,

        });
    }
    if(question.length) return <Navigate to={"/question"}/>;

    return (
        <AnimateProvider className="flex flex-col text-sm md:mx-auto md:max-auto md:max-w-xl">
            <h1 className="text-lg font bold text-slate-800 mb-10">Welcome to <span>Take Quiz</span></h1>
            <h3 className="text-xs md:text-sm text-neutral-600 font-semibold mb-3">Select type {" "}</h3>
            <select className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg px-1 py-2 md:py-3  text-xs md:text-sm focus:border-none focus:outline-none focus:ring-[1p] focus:ring-orange-500 text-gray-700 font-medium mb-5" 
            name="type"
            onChange={(e) => setType(e.target.value)}
            >
                {
                    Types.map((type) =>(
                        <option value={type.id} key={type.id}>{type.name}</option>
                    ))
                }


            </select>
            <h3 className="text-xs md:text-sm text-neutral-600 font-semibold mb-3">
                Select Difficulty
            </h3>
            <select 
            name="level"
            className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg px-1 py-2 md:py-3 text-s md:text-sm focus:border-none focus:outline-none focus:ring-[1px] focus:ring-orange-500 text-gray-700 font-medium mb-10 capitalize"
            onChange={(e)=> setLevel(e.target.value)}
            >
                {
                    Level.map((level) => (
                        <option value={level} key={level}>
                          {level}
                        </option>
                    ))
                }
            </select>

            <button
            className="flex rounded-full bg-orange-500 p-1 py-2 md:py-2 justify-center font-semibold md:font-bold text-sm md:text-base text-center hover:bg-neutral-50 hover:text-orange-500 transition text-white"
            onClick={handleBegin}
            >
                Begin Test

            </button>

        </AnimateProvider>
    )
}
export default Apps