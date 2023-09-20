export const createRaportFile = (data) => {

    const sortedData = {
        'title': data.title,
        'url': data.url,
        'server-response-time': data.SRT + 'ms',
        'interactive-time': data.interactiveTime + 'ms',
        'payload-score': data.payloadScore,
        'js-bootup': data.jsBootup,
        'largest-contentful-paint' : data.LCP + 'ms',
        'total-blocking-time': data.TBT + 'ms',
        'speed-index': data.SI + 'ms',
        'cumulative-layout-shift': data.CLS,
        'first-contentful-paint': data.FCP + 'ms',
        'mobile-server-response-time': data.m_SRT + 'ms',
        'mobile-largest-contentful-paint' : data.m_LCP + 'ms',
        'mobile-total-blocking-time': data.m_TBT + 'ms',
        'mobile-speed-index': data.m_SI + 'ms',
        'mobile-cumulative-layout-shift': data.m_CLS,
        'mobile-first-contentful-paint': data.m_FCP + 'ms',
    }

    const lines = [];

    for (const key in sortedData) {
        if (sortedData.hasOwnProperty(key)) {
            lines.push(`${key}:   ${sortedData[key]}`);
        }
    }

    const finalData = lines.join('\n');

    const blob = new Blob([finalData], { type: "text/plain" });

    const url = window.URL.createObjectURL(blob);

    return url;
}