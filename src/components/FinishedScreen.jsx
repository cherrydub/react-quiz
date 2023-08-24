import React from "react";

export default function FinishedScreen({
  points,
  maximumPoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maximumPoints) * 100;

  let emoji;

  if (percentage === 100) emoji = `🥇`;
  if (percentage >= 80 && percentage < 100) emoji = `🎉`;
  if (percentage >= 50 && percentage < 80) emoji = `🥸`;
  if (percentage >= 0 && percentage < 50) emoji = `😬`;

  return (
    <div>
      <p className="result">
        You scored <strong>{points}</strong> out of {maximumPoints} (
        {Math.ceil(percentage)}%) {emoji}
      </p>
      <p className="highscore">(Highscore: {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Retake Quiz
      </button>
    </div>
  );
}
