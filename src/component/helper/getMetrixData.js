export const getMetrixData = (pageData, isMobile) => {

    const {interactiveTime, FCP, TBT, CLS, LCP, SI, m_FCP, m_TBT, m_CLS, m_intercativeTime, m_SI, m_LCP} = pageData;


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
    const siData = {
        fullName: 'Speed Index',
        score: isMobile ? m_SI : SI,
        info: 'not info',
        percent: !isMobile ? (SI / 5000) : (m_SI / 5000) 
    }

    const tbtData = {
        fullName: 'Total Blocking Time',
        score: isMobile ? m_TBT : TBT,
        info: 'not info',
        percent: !isMobile ? (TBT / 3000) : (m_TBT / 3000) 
    }

    const lcpData = {
        fullName: 'Largest Contentful Paint',
        score: isMobile ? m_LCP : LCP,
        info: 'not info',
        percent: !isMobile ? (LCP / 6000) : (m_LCP / 6000) 
    }
    const clsData = {
        fullName: 'Cumulative Layout Shift',
        score: isMobile ? m_CLS : CLS,
        info: 'not info',
        percent: !isMobile ? (CLS / 0.82) : (m_CLS / 0.82) 
    }

    return [fcpData, tiData, siData, tbtData, lcpData, clsData];

}