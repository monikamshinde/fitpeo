import React from 'react';
import "./assets/style.css";
const CircularProgressBar = ({ progress }) => {
  return (
    <div className="progress-circle" style={{ '--progress': progress }}>
      <div className="progress-circle__text"><span>{progress}% </span><label style={{'font-size':'7px'}}>Goal Completed</label></div>      
    </div>
  );
};

export default CircularProgressBar;
