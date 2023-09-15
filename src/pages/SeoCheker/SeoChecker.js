import './seoChecker.css';

import ReportHeader from '../../component/ReportHeader/ReportHeader';
import ReportDataCards from '../../component/ReportDataCards/ReportDataCards';
import ReportMetrix from '../../component/ReportMetrix/ReportMetrix';


const SeoChecker = () => {
    return (
        <div className="report-wrapper">
            <div className="report-container">

                <ReportHeader />
                <ReportDataCards />
                <ReportMetrix />

            </div>
        </div>
    );
}
 
export default SeoChecker;