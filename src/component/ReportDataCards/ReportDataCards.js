import './reportDataCards.css';

import SeoScoreCard from '../SeoScoreCard/SeoScoreCard';
import PreviewCard from '../PreviewCard/PreviewCard';
import CategoriesAnalys from '../CategoriesAnalys/CategorierAnalys';
import { useSelector } from 'react-redux';

const ReportDataCards = ({pageData}) => {

    const loading = useSelector(state => state.loading)

    const {FCP, SI, LCP, TBT, CLS, screen} = pageData;
    let CLS_percentage = null
    let FCP_percentage = null
    let SI_percentage = null
    let LCP_percentage = null
    let TBT_percentage = null
    let score = null;

    const isEmpty = (obj) => {
        return Object.entries(obj).length === 0;
    };

        
    if (!isEmpty(pageData) && !loading) {
        CLS_percentage = (1-(CLS / 0.82)) * 0.25;
        FCP_percentage = (1-(FCP / 4000)) * 0.10;
        SI_percentage = (1-(SI / 5000)) * 0.10;
        LCP_percentage = (1-(LCP / 6000)) * 0.25;
        TBT_percentage = (1-(TBT / 2000)) * 0.30;
        score = Math.round((CLS_percentage + FCP_percentage + SI_percentage + LCP_percentage + TBT_percentage) * 100);
    } else {
        score = 0;
    }

    
    return ( 
        <div className="report__data--content">
            
            <SeoScoreCard 
            isEmpty={isEmpty(pageData)}
            score={score}/>

            <PreviewCard screen={screen}/>
            <CategoriesAnalys pageData={pageData}/>

        </div>      
    );
}
 
export default ReportDataCards;