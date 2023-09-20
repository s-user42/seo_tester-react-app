import './vitalsCard.css';
import LinearProgressBar from '../ProgressBar/LinearProgressBar';


const VitalsCard = ({name, score, desc, maxScore, fullName}) => {

    let percent=((score / maxScore) * 100).toFixed();
    if (percent > 100) percent = 100;

    return (
        <div className="vitals__card">
            <div className="vitals__card--title">{desc}</div>
            <div className="vitals__card--name">{name}</div>
            <div className="vitals__card--full-name">{fullName}</div>
            <LinearProgressBar percent={percent} time={score}
            name={name}/>
        </div>
    );
}
 
export default VitalsCard;