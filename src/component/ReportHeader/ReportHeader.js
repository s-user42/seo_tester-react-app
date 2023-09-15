import './reportHeader.css';

import cloud_download_icon from '../../images/icons/cloud-download-2.svg';


const ReportHeader = () => {
    return (
            <div className='report__row d-flex flex-row'>
                <div className="report__main-info d-flex">
                    <div className="report__web-icon">
                        <img src='https://www.google.com/s2/favicons?sz=64&domain=ya.ru' alt="" />
                    </div>
                    <div className="report__web-text">
                        <div className="report__web--title">ya.ru</div>
                        <div className="report__web--link">https://www.google.com/s2/favicons?sz=64&domain=ya.ru</div>
                    </div>
                </div>
                <button className="download-button">
                    <img src={cloud_download_icon} alt="coud download"/>
                    <span class="md-body-2 font-bold hide-xs">Download Report</span>
                </button>
            </div>
    );
}
 
export default ReportHeader;