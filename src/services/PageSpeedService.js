
class PageSpeedService {
    
    getPageData = async (url) => {
        let mobileRes = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=mobile&key=AIzaSyB_k_hJY6iHEnI02V2xUGtd5TqYGEci7lk`);
        let res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=desktop&key=AIzaSyB_k_hJY6iHEnI02V2xUGtd5TqYGEci7lk&category=performance`);
        if (!res.ok) throw Error(`Could not fetch ${url}, status: ${res.status}`);
        if (!mobileRes.ok) throw Error(`Could not fetch ${url}, status: ${res.status}`);
        res = await res.json();
        mobileRes = await mobileRes.json();
        return await this.__transformData(res, mobileRes);
    }

    __transformData = async (data, m_data) => {
        const favicon = await this.__getFavicon(data.lighthouseResult.finalUrl)
        const transformData = {
            score: data.lighthouseResult.categories.performance.score,
            screen: data.lighthouseResult.audits['final-screenshot'].details.data,
            
            interactiveScore: data.lighthouseResult.audits.interactive.score,
            interactiveTime: data.lighthouseResult.audits.interactive.numericValue,

            payloadScore: data.lighthouseResult.audits['total-byte-weight'].score,
            jsBootup: data.lighthouseResult.audits['bootup-time'].score,

            url: data.lighthouseResult.finalUrl,
            title: new URL(data.lighthouseResult.finalUrl).hostname,
            icon: favicon,

            SRT: data.lighthouseResult.audits['server-response-time'].numericValue,
            m_SRT: m_data.lighthouseResult.audits['server-response-time'].numericValue,


            // nrOfErrors: data.l ighthouseResult.audits['critical-request-chains'].score,
            FCP: data.lighthouseResult.audits['first-contentful-paint'].numericValue,
            SI: data.lighthouseResult.audits['speed-index'].numericValue,
            LCP: data.lighthouseResult.audits['largest-contentful-paint'].numericValue,
            TBT: data.lighthouseResult.audits['total-blocking-time'].numericValue,
            CLS: data.lighthouseResult.audits['cumulative-layout-shift'].numericValue,
            m_score: m_data.lighthouseResult.categories.performance.score,
            m_FCP: m_data.lighthouseResult.audits['first-contentful-paint'].numericValue,
            m_SI: m_data.lighthouseResult.audits['speed-index'].numericValue,
            m_LCP: m_data.lighthouseResult.audits['largest-contentful-paint'].numericValue,
            m_TBT: m_data.lighthouseResult.audits['total-blocking-time'].numericValue,
            m_CLS: m_data.lighthouseResult.audits['cumulative-layout-shift'].numericValue,
            m_intercativeTime: m_data.lighthouseResult.audits.interactive.numericValue,
            
        }
        return transformData;
    }

    __getFavicon = async (url) => {
        try {
          const domain = new URL(url).hostname;
    
          const faviconUrl = `http://${domain}/favicon.ico`;
    
          const img = new Image();
          img.src = faviconUrl;
          await new Promise((resolve, reject) => {
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error('Фавикон не найден'));
          });
          console.log(faviconUrl)
          return faviconUrl;
        } catch (error) {
          console.error('Ошибка при получении фавикона:', error);
          return null; 
        }
      }
}

  


export default PageSpeedService; 