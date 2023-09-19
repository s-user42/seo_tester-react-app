import './reportHeader.css';

import img_not_found from '../../images/icons/img_not_found.png';
import cloud_download_icon from '../../images/icons/cloud-download-2.svg';
import SkeletonIcon from '../Skeleton/SkeletonIcon';
import SkeletonText from '../Skeleton/SkeletonText';


const ReportHeader = ({pageData, loading}) => {

    let {icon, url, title} = pageData;
    icon = icon ? icon : img_not_found;

    return (
            <div className='report__row d-flex flex-row'>
                <div className="report__main-info d-flex">
                    {loading ? <SkeletonIcon /> :
                    <div className="report__web-icon">
                        <img src={icon} alt="icon" />
                    </div>
                    }
                    <div className="report__web-text">
                        {loading ? <SkeletonText/> : 
                        <><div className="report__web--title">{title}</div>
                        <a className="report__web--link" href={url} target='_blanc'>{url}</a>
                        </>}
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