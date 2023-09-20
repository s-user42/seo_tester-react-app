import './categoriesAnalys.css';

import RadarChartComponent from '../RadarChart/RadarChart';

const CategoriesAnalys = ({pageData}) => {
    return (
        <div className="report__data--wrapper report__analysis">
            <div className="report__data--container report__analysis--radar">
                <p className='report__analysis--title'>
                SEO Categories Analysis
                </p>
                <RadarChartComponent pageData={pageData}/>
                <p className='report__analysis--title'>
                
                </p>
            </div>
        </div>
    );
}
 
export default CategoriesAnalys;