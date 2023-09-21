import './reportHeader.css';

import img_not_found from '../../images/icons/img_not_found.png';
import cloud_download_icon from '../../images/icons/cloud-download-2.svg';
import SkeletonIcon from '../Skeleton/SkeletonIcon';
import SkeletonText from '../Skeleton/SkeletonText';
import { useSelector } from 'react-redux';
import { createRaportFile } from '../helper/createRaportFile';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';


const ReportHeader = ({pageData}) => {

    const { t } = useTranslation();
    const loading = useSelector(state => state.loading);
    const link_element = useRef();

    let {icon, url, title} = pageData;
    icon = icon ? icon : img_not_found;

    const isEmpty = (obj) => {
        return Object.entries(obj).length === 0;
    };

    const buttonClasses = loading || isEmpty(pageData) ? "download-button disabled-button" : "download-button";


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
                        <>
                            <div className="report__web--title">{title}</div>
                            <a className="report__web--link" href={url} target='_blanc'>{url}</a>
                        </>}
                    </div>
                </div>
                <button className={buttonClasses} >
                    <img src={cloud_download_icon} alt="cloud download"/>
                    {loading || isEmpty(pageData) ?
                    <span class="md-body-2 font-bold hide-xs">{t("download-button-text")}</span> :
                    <a
                    ref={link_element}
                    href={createRaportFile(pageData)} 
                    className='download__report--link'
                    download="page_speed_report.txt">
                        <span class="md-body-2 font-bold hide-xs">{t("download-button-text")}</span>
                    </a>
                    }
                </button>
            </div>
    );
}
 
export default ReportHeader;