import React from 'react';
import './linearProgressBar.css'; // Подключите стили для прогресс бара

const LinearProgressBar = ({ percent = 0, time = 0, name}) => {
    
    percent = isNaN(percent) ? 0 : percent;

    return (
        <div className="multi-color-progress-bar">
          <div
            className="progress"
            style={{
              background: `linear-gradient(to right, green 0%, green 33%, yellow 33%, yellow 66%, red 66%, red 100%)`,
            }}
          >
            <div className="progress-indicator" style={{ left: `${percent}%` }}>
                <p>
                  
                  {name === "CLS" ? 
                  time.toFixed(2) : 
                  (time / 1000).toFixed(1) + 's'}

                </p>
            </div>
          </div>
        </div>
      );
};

export default LinearProgressBar;