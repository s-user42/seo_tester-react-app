
import './reportDataCards.css';
import CircularProgressBar from '../ProgressBar/CircularProgressBar';
import { Spinner } from 'react-bootstrap';

const ReportDataCards = ({pageData}) => {

    const {screen} = pageData;
    const nrOfErrors = pageData.nrOfErrors ? pageData.nrOfErrors : 0;
    const score = pageData.score * 100;


    let seoScoreMsg = 'loading...';
    if (score <= 25) seoScoreMsg = `The speed of your page is only ${score}% of optimal. Our tools have identified ${nrOfErrors} critical issues that need to be addressed.`
    else if (score <= 50) seoScoreMsg = `The speed of your page has reached ${score}% of optimal, but there are still ${nrOfErrors} critical issues that require attention`;
    else if (score <= 75) seoScoreMsg = `The speed of your page has reached ${score}% of optimal, but there are still ${nrOfErrors} critical issues to be resolved for maximum performance.`;
    else if (score <= 100) seoScoreMsg = `The page is sufficiently optimized. Critical errors: ${nrOfErrors}`


    return ( 
        <div className="report__data--content">
            <div className="report__data--wrapper report--seo-score">
                <div className="report__data--container">
                    <div className="report--seo-score--title">SEO score</div>
                    
                        <CircularProgressBar 
                        percentage={score}
                        className="report--seo-progress-bar" /> 
                
                    
                    <div className="report--seo-score--desc">{seoScoreMsg}</div>
                </div>
            </div>

            <div className="report__data--wrapper report--preview">
                <div className="report__data--container">
                    <img src={screen} alt="" />
                </div>
            </div>

            <div className="report__data--wrapper report--analysis">
                <div className="report__data--container">

                </div>
            </div>
        </div>      
    );
}
 
export default ReportDataCards;