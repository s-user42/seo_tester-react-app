import './reportMetrix.css';

import info_icon from '../../images/icons/icons8-info (1).svg';

import red_triangle from '../../images/warning_icon.png';
import orange_circle from '../../images/ornage_circle.webp';
import green_icon from '../../images/check.png';

import ChangeDeviceBtn from '../ChangeDeviceBtn/ChangeDeviceBtn';

import speedometer_icon from '../../images/icons/speedometer.svg';
import bookmark_icon from '../../images/icons/bookmark-ribbon-7790.svg';
import check_mark_icon from '../../images/icons/check-mark-10120.svg';
import VitalsCard from '../VitalsCard/VitalsCard';
import { useState } from 'react';
import SkeletonText from '../Skeleton/SkeletonText';


const ReportMetrixElement = ({data}) => {

    let {fullName, score, info, percent} = data;
    percent = percent * 100;

    let img;
    let timeColor;
    if (percent <= 33.33) {
        img = green_icon;
        timeColor = 'green';
    }
    else if (percent <= 66.66) {
        img = orange_circle;
        timeColor = 'orange'
    }
    else {
        img = red_triangle;
        timeColor = 'red'
    }


    return (
        <div className="time__analys--element">
            <div className='info__icon'>
                <img src={info_icon} alt="info_icon"/>
                <p className="info__icon--msg">{info}</p>
            </div>
            <p>{fullName}</p>
            <span className='time__analys--info' style={{color: timeColor}}>
                {fullName === 'Cumulative Layout Shift' ? score.toFixed(2) :
                (score / 1000).toFixed(2)}
                <img src={img} alt="icon" className="time__analys--color-icon" />
            </span>
        </div>
    )
}


const ReportMetrix = ({pageData}) => {

    const [isMobile, setIsMobile] = useState(false);

    const {interactiveTime, FCP, TBT, CLS, LCP, SI, m_FCP, m_TBT, m_CLS, m_intercativeTime, m_SI, m_LCP} = pageData;
    // const {FCP_desc, CLS_desc, TBT_desc, interactive_desc, SI_desc, LCP_desc} = dataDescription;
    const fcpData = {
        fullName: 'First Contentful Paint',
        score: isMobile ? m_FCP : FCP,
        info: "not info",
        percent: !isMobile ? (FCP / 4000) : (m_FCP / 4000) 
    }

    const tiData = {
        fullName: 'Time to Interactive',
        score: isMobile ? m_intercativeTime : interactiveTime,
        info: 'not info',
        percent: !isMobile ? (interactiveTime / 4000) : (m_intercativeTime / 4000) 
    }

    const tbtData = {
        fullName: 'Total Blocking Time',
        score: isMobile ? m_TBT : TBT,
        info: 'not info',
        percent: !isMobile ? (TBT / 3000) : (m_TBT / 3000) 
    }

    const clsData = {
        fullName: 'Cumulative Layout Shift',
        score: isMobile ? m_CLS : CLS,
        info: 'not info',
        percent: !isMobile ? (CLS / 0.82) : (m_CLS / 0.82) 
    }
    
    const lcpData = {
        fullName: 'Largest Contentful Paint',
        score: isMobile ? m_LCP : LCP,
        info: 'not info',
        percent: !isMobile ? (LCP / 6000) : (m_LCP / 6000) 
    }

    const siData = {
        fullName: 'Speed Index',
        score: isMobile ? m_SI : SI,
        info: 'not info',
        percent: !isMobile ? (SI / 5000) : (m_SI / 5000) 
    }





    return (
        <div className="report__metrix">
            <div className="report__metrix--head">
                <div className="report__main-info d-flex">
                    <img src={speedometer_icon} alt="metrix icon" />
                    <div className="report__metrix--title">UX & Performance Metrix</div>
                </div>

                <ChangeDeviceBtn 
                changeDevice={setIsMobile}
                isMobile={isMobile}/>
            
            </div>

            <div className="report__metrix-card--wrapper">


                <div className="report__metrix--core">
                    <div className="report__metrix--core-head">
                        <img src={bookmark_icon} alt="bookmark" />
                        <div className="report__metrix--core-title">Core web vitals</div>
                    </div>
                </div>


                <div className="reprort__metrix--vitals">
                    
                    <div className="report__metrix--vitals-graphs">
                        <VitalsCard name={'LCP'} 
                        percent={1} desc={'Loading'}/>
                        <VitalsCard name={'FID'} 
                        percent={1} desc={'Interactivity'}/>
                        <VitalsCard name={'CLS'} 
                        percent={1} desc={'Visual Stability'}/>
                    </div>

                    <div className="separator-container">
                        <div className="separator"></div>
                    </div>

                    <div className="google-report">
                        <div className="google-report--title">
                        <img src={check_mark_icon} alt="check mark" />
                        This page has passed the Google Test! The data refer to the last 28 days of use by users
                        </div>
                        <div className="google-report--desc">
                        Data generated from analysis done by Google on the visits and experience of your users over the last days.
                        </div>
                    </div>

                </div>



                <div className="report__metrix--time-analys">

                    <div className="time__analys--row">
                        <ReportMetrixElement data={fcpData}/>
                        <ReportMetrixElement data={tiData}/>
                    </div>

                    <div className="time__analys--row">
                        <ReportMetrixElement data={siData}/>
                        <ReportMetrixElement data={tbtData}/>
                    </div>

                    <div className="time__analys--row">
                        <ReportMetrixElement data={lcpData}/>
                        <ReportMetrixElement data={clsData}/>
                    </div>

                </div>


            </div>

        </div>
    );
}
 
export default ReportMetrix;