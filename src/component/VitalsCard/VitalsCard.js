import './vitalsCard.css';
import LinearProgressBar from '../ProgressBar/LinearProgressBar';


const VitalsCard = ({percent, name, desc, fullName}) => {
    return (
        <div className="vitals__card">
            <div className="vitals__card--title">{desc}</div>
            <div className="vitals__card--name">{name}</div>
            <div className="vitals__card--full-name">Largest Contentful Paint</div>
            <LinearProgressBar percent={percent}/>
        </div>
    );
}
 
export default VitalsCard;