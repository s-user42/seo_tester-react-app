import React from 'react';
import { Circle } from 'react-circle';

const CircularProgressBar = ({ percentage }) => {

    let progressColor;

    if (percentage <= 25) progressColor = 'red';
    else if (percentage <= 50) progressColor = 'orange';
    else if (percentage <= 75) progressColor = 'yellow';
    else progressColor = 'rgb(3, 191, 3)';


    return (
        <div className="circular-progress-bar">
        <Circle
            progress={percentage}
            animate={true}
            animationDuration="1s"
            lineWidth={50}
            responsive={true}
            showPercentage={true}
            progressColor={progressColor}
        />
        </div>
    );
};

export default CircularProgressBar;
