import React from 'react';

const StatCard = ({ title, value }) => {
  return (
    <div className="stat-card">
      <span className="stat-title">{title}</span>
      <h2 className="stat-value">{value}</h2>
    </div>
  );
};

export default StatCard;