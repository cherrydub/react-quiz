import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h3>Welcome to the React Quiz</h3>
      <p>{numQuestions} questions to test your react mastery</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        lets start
      </button>
    </div>
  );
}
