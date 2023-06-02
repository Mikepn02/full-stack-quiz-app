import he from 'he';
import Option from '../Option/Option';
import useQuestionStore from '../../store/zustand';

function Question({ id, handleClick, singleQuestion, summary }) {
  console.log(singleQuestion)
  const { incorrect_answers, correct_answer, question } = singleQuestion;
  const { userAnswer: allUserAnswer } = useQuestionStore();

  const userAnswer = allUserAnswer.find((answer) => answer.question === question);
  const options = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

  return (
    <section>
      <div className="flex-items space-x-3 text-base md:text-lg mb-10">
        <h3 className="text-gray-800 font-semibold text-center">{id}.</h3>
        <h3 className="text-gray-800 font-semibold">{he.decode(question)}</h3>
      </div>
      {options.map((option, index) => (
        <Option
          key={option.id} // Replace 'id' with the unique identifier from 'options'
          handleClick={handleClick}
          trueAnswer={correct_answer}
          singleQuestion={singleQuestion}
          idx={index}
          userAnswer={userAnswer}
          summary={summary}
        />
      ))}
    </section>
  );
}

export default Question;
