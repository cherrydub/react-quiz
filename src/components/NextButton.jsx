import React from "react";

export default function NextButton({ dispatch, answer, index, numQuestions }) {
  //ok so this is very important to note, will only show if there is an answer
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        finish
      </button>
    );
}
