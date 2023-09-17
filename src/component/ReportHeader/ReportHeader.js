import './reportHeader.css';

import img_not_found from '../../images/icons/img_not_found.png';
import cloud_download_icon from '../../images/icons/cloud-download-2.svg';


const ReportHeader = ({pageData}) => {

    const {icon, url, title} = pageData;

    return (
            <div className='report__row d-flex flex-row'>
                <div className="report__main-info d-flex">
                    <div className="report__web-icon">
                        <img src={icon ? icon : img_not_found} alt="icon" />
                    </div>
                    <div className="report__web-text">
                        <div className="report__web--title">{title}</div>
                        <a className="report__web--link" href={url} target='_blanc'>{url}</a>
                    </div>
                </div>
                <button className="download-button">
                    <img src={cloud_download_icon} alt="cloud download"/>
                    <span class="md-body-2 font-bold hide-xs">Download Report</span>
                </button>
            </div>
    );
}
 
export default ReportHeader;