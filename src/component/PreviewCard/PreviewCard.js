import './previewCard.css';

import SkeletonText from '../Skeleton/SkeletonText';
import SkeletonImg from '../Skeleton/SkeletonImg';

import imgNotFound from '../../images/img_not_found.jpg';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const PreviewCard = ({screen}) => {

    const { t } = useTranslation();

    const loading = useSelector(state => state.loading);

    return (
        <div className="report__data--wrapper report__preview">
            <div className="report__data--container">
                <p className='report__preview--title'>{t("website-preview")}</p>
                {
                    !loading ? 
                    <div className="report__review--img">
                        <img src={screen ? screen : imgNotFound} alt="website screenshot" /> 
                    </div> : 
                    <SkeletonImg/>
                }
                <div className="report__preview--aditional-info">
                    {
                    loading ? 
                    <SkeletonText/> : 
                    <p>{t("website-perview-desc")}<span> Page Speed Insights of Google</span></p>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default PreviewCard;