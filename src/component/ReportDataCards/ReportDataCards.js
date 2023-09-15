
import './reportDataCards.css';
import CircularProgressBar from '../ProgressBar/CircularProgressBar';

const ReportDataCards = ({seoPercentage, nrOfErrors}) => {

    let seoScoreMsg = 'loading...';
    if (seoPercentage <= 25) seoScoreMsg = `The speed of your page is only ${seoPercentage}% of optimal. Our tools have identified ${nrOfErrors} critical issues that need to be addressed.`
    else if (seoPercentage <= 50) seoScoreMsg = `The speed of your page has reached ${seoPercentage}% of optimal, but there are still ${nrOfErrors} critical issues that require attention`;
    else if (seoPercentage <= 75) seoScoreMsg = `The speed of your page has reached ${seoPercentage}% of optimal, but there are still ${nrOfErrors} critical issues to be resolved for maximum performance.`;
    else if (seoPercentage <= 100) seoScoreMsg = `The page is sufficiently optimized. Critical errors: ${nrOfErrors}`


    return ( 
        <div className="report__data--content">
            <div className="report__data--wrapper report--seo-score">
                <div className="report__data--container">
                    <div className="report--seo-score--title">SEO score</div>
                    
                        <CircularProgressBar 
                        percentage={seoPercentage}
                        className="report--seo-progress-bar" />
                    
                    <div className="report--seo-score--desc">{seoScoreMsg}</div>
                </div>
            </div>

            <div className="report__data--wrapper report--preview">
                <div className="report__data--container">

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