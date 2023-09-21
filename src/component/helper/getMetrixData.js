export const getMetrixData = (pageData, isMobile, t) => {

    const {interactiveTime, FCP, TBT, CLS, LCP, SI, m_FCP, m_TBT, m_CLS, m_intercativeTime, m_SI, m_LCP} = pageData;

    const fcpData = {
        fullName: t("fcp"),
        score: isMobile ? m_FCP : FCP,
        info: t("fcp-desc"),
        percent: !isMobile ? (FCP / 4000) : (m_FCP / 4000) 
    }

    const tiData = {
        fullName: t("ti"),
        score: isMobile ? m_intercativeTime : interactiveTime,
        info: t("ti-desc"),
        percent: !isMobile ? (interactiveTime / 4000) : (m_intercativeTime / 4000) 
    }
    const siData = {
        fullName: t("si"),
        score: isMobile ? m_SI : SI,
        info: t("si-desc"),
        percent: !isMobile ? (SI / 5000) : (m_SI / 5000) 
    }

    const tbtData = {
        fullName: t("tbt"),
        score: isMobile ? m_TBT : TBT,
        info: t("tbt-desc"),
        percent: !isMobile ? (TBT / 3000) : (m_TBT / 3000) 
    }

    const lcpData = {
        fullName: t("lcp"),
        score: isMobile ? m_LCP : LCP,
        info: t("lcp-desc"),
        percent: !isMobile ? (LCP / 6000) : (m_LCP / 6000) 
    }
    const clsData = {
        fullName: t("cls"),
        score: isMobile ? m_CLS : CLS,
        info: t("cls-desc"),
        percent: !isMobile ? (CLS / 0.82) : (m_CLS / 0.82) 
    }

    return [fcpData, tiData, siData, tbtData, lcpData, clsData];
}