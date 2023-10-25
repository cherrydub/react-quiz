import React from "react";

export default function Progress({ index, numQuestions, answer }) {
  return (
    <>
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
      </header>
    </>
  );
}
