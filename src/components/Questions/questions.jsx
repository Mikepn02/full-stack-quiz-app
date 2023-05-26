import he from 'he';
import Option from '../Option/Option';
import useQuestionStore from '../../store/zustand';

function Question({id,handleClick,singleQuestion , summary}){
  const {incorrect_answer , correct_answer,question} = singleQuestion;
  const {userAnswer: AllUserAnswer} = useQuestionStore();

  const userAnswer = AllUserAnswer.find((ans) => (ans.question === question))
  const options = incorrect_answer
  .concat(correct_answer)
  .sort(() => Math.random() - 0.5);
  return(
    <section>
     <div className={`flex-items space-x-3 text-base md:text-lg mb-10`}>
       <h3 className="text-gray-800 font-semibold text-center">{id}.</h3>
       <h3 className="text-gray-800 font-semibold">{he.decode(question)}</h3>
     </div>
     {
      options.map((opt,i) => (
        <Option
        key = {i}
        handleClick={handleClick}
        trueAnswer={correct_answer}
        idx={i}
        userAnswer={userAnswer}
        summary={summary}
        
        />
      ))
     }
     </section>
 )
}
export default Question