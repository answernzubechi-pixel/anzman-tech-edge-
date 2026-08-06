import React from 'react';

const ResultRow = ({ subject, score, grade }) => {
  // Logic: Change color based on score
  const scoreClass = score < 50 ? "text-fail" : "text-pass";

  return (
    <tr className="result-row">
      <td>{subject}</td>
      <td>{score}</td>
      <td className={scoreClass}>{grade}</td>
    </tr>
  );
};

export default ResultRow;