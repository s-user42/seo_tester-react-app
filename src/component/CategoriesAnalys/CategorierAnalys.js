import './categoriesAnalys.css';

import RadarChartComponent from '../RadarChart/RadarChart';
import { useTranslation } from 'react-i18next';

const CategoriesAnalys = ({pageData}) => {

    const { t } = useTranslation();

    return (
        <div className="report__data--wrapper report__analysis">
            <div className="report__data--container report__analysis--radar">
                <p className='report__analysis--title'>
                {t("seo-categories-title")}
                </p>
                <RadarChartComponent 
                pageData={pageData}
                t={t}/>
            </div>
        </div>
    );
}
 
export default CategoriesAnalys;