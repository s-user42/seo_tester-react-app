import './seoChecker.css';

import ReportHeader from '../../component/ReportHeader/ReportHeader';
import ReportDataCards from '../../component/ReportDataCards/ReportDataCards';
import ReportMetrix from '../../component/ReportMetrix/ReportMetrix';
import InputComponent from '../../component/InputComponent/InputComponent';


const SeoChecker = ({pageData, onSubmit, errorMsg, loading}) => {

    return (
        <>
        <InputComponent 
        onSubmit={onSubmit}
        errorMsg={errorMsg}
        loading={loading}/>
        
        <div className="report-wrapper">
            <div className="report-container">

                <ReportHeader 
                pageData = {pageData}/>
                <ReportDataCards 
                pageData = {pageData}
                loading = {loading}/>
                <ReportMetrix />

            </div>
        </div>
        </>
    );
}
 
export default SeoChecker;