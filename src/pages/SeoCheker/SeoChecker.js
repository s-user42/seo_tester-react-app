import './seoChecker.css';

import ReportHeader from '../../component/ReportHeader/ReportHeader';
import ReportDataCards from '../../component/ReportDataCards/ReportDataCards';
import ReportMetrix from '../../component/ReportMetrix/ReportMetrix';


const SeoChecker = ({pageData}) => {


    return (
        <>
        <div className="report-wrapper">
            <div className="report-container">
                <ReportHeader pageData = {pageData}/>
                <ReportDataCards pageData = {pageData}/>
                <ReportMetrix pageData={pageData}/>
            </div>
        </div>
        </>
    );
}
 
export default SeoChecker;