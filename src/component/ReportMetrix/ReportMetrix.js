import './reportMetrix.css';

import { useSelector } from 'react-redux';
import { getMetrixData } from '../helper/getMetrixData';

import info_icon from '../../images/icons/icons8-info (1).svg';
import red_triangle from '../../images/warning_icon.png';
import orange_circle from '../../images/ornage_circle.webp';
import green_icon from '../../images/check.png';
import speedometer_icon from '../../images/icons/speedometer.svg';
import bookmark_icon from '../../images/icons/bookmark-ribbon-7790.svg';

import ChangeDeviceBtn from '../ChangeDeviceBtn/ChangeDeviceBtn';
import VitalsCard from '../VitalsCard/VitalsCard';
import SkeletonText from '../Skeleton/SkeletonText';


const ReportMetrixElement = ({data, isEmptyData}) => {

    const loading = useSelector(state => state.loading);

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

    score = score && !isNaN(score) ? score : 0;

    return (
        <div className="time__analys--element">
            {loading ? <SkeletonText />:
            <>
            <div className='info__icon'>
                <img src={info_icon} alt="info_icon"/>
                <p className="info__icon--msg">{info}</p>
            </div>
            <p>{fullName}</p>

                {!isEmptyData ? 
                <span className='time__analys--info' style={{color: timeColor}}>
                    {fullName === 'Cumulative Layout Shift' ? score.toFixed(2) :
                    (score / 1000).toFixed(2)}
                    <img src={img} alt="icon" className="time__analys--color-icon" />
                </span> :
                null
                }
            </>
            }
        </div>
    )
}


const ReportMetrix = ({pageData}) => {

    const isMobile = useSelector(state => state.isMobile)
    const {CLS, LCP, m_CLS, m_LCP, SRT, m_SRT} = pageData;

    const isEmpty = (obj) => {
        return Object.entries(obj).length === 0;
    };
    
    const dataArr = getMetrixData(pageData, isMobile);
    
    return (
        <div className="report__metrix">
            <div className="report__metrix--head">
                <div className="report__main-info d-flex">
                    <img src={speedometer_icon} alt="metrix icon" />
                    <div className="report__metrix--title">UX & Performance Metrix</div>
                </div>

                <ChangeDeviceBtn />
            
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

                        <VitalsCard 
                        name={'LCP'}
                        score={isMobile ? m_LCP : LCP}
                        maxScore={isMobile ? 8000 : 6000}
                        fullName={'Largest Contentful Paint'}
                        desc={'Loading'}/>

                        <VitalsCard
                        name={'SRT'}
                        score={isMobile ? m_SRT : SRT}
                        maxScore={200}
                        fullName={'Server Response Time'}
                        desc={'Interactivity'}/>

                        <VitalsCard 
                        name={'CLS'}
                        score={isMobile ? m_CLS : CLS}
                        maxScore={0.82}
                        fullName={'Cumulative Layout Shift'}
                        desc={'Visual Stability'}/>
                    </div> 

                    <div className="separator-container">
                        <div className="separator"></div>
                    </div>

                    <div className="google-report">
                        <div className="google-report--title">
                            <p className="info__icon--msg">asdfhsk</p>
                        Key Insights on Website Performance Metrics
                        </div>
                        <div className="google-report--desc">
                        These data, when combined, offer a deep insight into your website's performance. 
                        They help gauge how quickly users view critical content (LCP), 
                        server response time, and the stability of page layout (CLS).
                        </div> 

                    </div>
                </div>

                <div className="report__metrix--time-analys">

                        {dataArr.map((data, index) => (
                            <ReportMetrixElement 
                            isEmptyData={isEmpty(pageData)}
                            key={index}
                            data={data}/>
                        ))}
                        
                </div>


            </div>

        </div>
    );
}
 
export default ReportMetrix;