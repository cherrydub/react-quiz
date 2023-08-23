import React from "react";

export default function Score({ points, totalPointsReduce }) {
  return (
    <div>
      Score: {points ? points : 0} / {totalPointsReduce}
    </div>
  );
}
