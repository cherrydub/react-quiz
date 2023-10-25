import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

export default function Question() {
  const { questions, index, answer, dispatch } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />

      {answer !== null ? (
        <button onClick={() => dispatch({ type: "nextQuestion" })}>next</button>
      ) : (
        ""
      )}
    </div>
  );
}
