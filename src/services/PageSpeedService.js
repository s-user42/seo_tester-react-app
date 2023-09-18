
class PageSpeedService {
    
    getPageData = async (url) => {
        let res = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=AIzaSyB_k_hJY6iHEnI02V2xUGtd5TqYGEci7lk`);
        if (!res.ok) throw Error(`Could not fetch ${url}, status: ${res.status}`);
        res = await res.json();
        return await this.__transformData(res);
    }

    __transformData = async (data) => {
        console.log(data)
        const favicon = await this.__getFavicon(data.lighthouseResult.finalUrl)
        const transformData = {
            score: data.lighthouseResult.categories.performance.score,
            screen: data.lighthouseResult.audits['final-screenshot'].details.data,
            url: data.lighthouseResult.finalUrl,
            title: new URL(data.lighthouseResult.finalUrl).hostname,
            icon: favicon,
            nrOfErrors: data.lighthouseResult.audits['critical-request-chains'].score,
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