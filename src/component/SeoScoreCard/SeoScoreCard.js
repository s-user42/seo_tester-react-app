import './seoScoreCard.css';

import CircularProgressBar from '../ProgressBar/CircularProgressBar';
import SkeletonText from '../Skeleton/SkeletonText';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const SeoScoreCard = ({score, isEmpty}) => {

    const { t } = useTranslation();

    const loading = useSelector(state => state.loading);

    let seoScoreMsg = isEmpty ? null : t("seo-score-desc", {score})

    return (
        <div className="report__data--wrapper report--seo-score">
            <div className="report__data--container">
                <div className="report--seo-score--title">{t("seo-score")}</div>
                
                <CircularProgressBar 
                percentage={score}
                className="report--seo-progress-bar" /> 

                <div className="report__seo--percentage-info">
                    <div className="indicator red__indicator">0-25</div>
                    <div className="indicator orange__indicator">26-50</div>
                    <div className="indicator yellow__indicator">51-75</div>
                    <div className="indicator green__indicator">75-100</div>
                </div>
                
                <div className="report--seo-score--desc">
                    {loading ? 
                    <SkeletonText/> : seoScoreMsg}
                </div>
            </div>
        </div>

    );
}
 
export default SeoScoreCard;