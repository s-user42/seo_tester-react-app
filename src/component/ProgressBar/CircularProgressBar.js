import React from 'react';
import { Circle } from 'react-circle';

const CircularProgressBar = ({ percentage = 0 }) => {

    let progressColor;
    let classProgressBar = "circular-progress-bar";

    if (percentage <= 25) {
        progressColor = 'red';
        classProgressBar += ' percentage25';
    }
    else if (percentage <= 50) {
        progressColor = 'orange';
        classProgressBar += ' percentage50';
    }
    else if (percentage <= 75) {
        progressColor = 'yellow';
        classProgressBar += ' percentage75';
    }
    else if (percentage <= 100) {
        progressColor = 'rgb(3, 191, 3)';
        classProgressBar += ' percentage100';
    }

    

    return (
        <div className={classProgressBar}>
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
