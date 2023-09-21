import './radarChart.css';

import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default class RadarChartComponent extends PureComponent {
    
    render() {    
        
        const { t } = this.props;

        const {pageData} = this.props;
        const {score, m_score, interactiveScore, payloadScore, jsBootup} = pageData

        const isEmpty = (obj) => {
            return Object.entries(obj).length === 0;
        };

        //legacy-javascript


        //unused-javascript
        
        //unused-css-rules
        //bootup-time

        const data = [
            {
                subject: t("payload-optimization"),
                A: payloadScore ? payloadScore * 100 : 0,
                B: 100,
            },
            {
                subject: t("desktop"),
                A: score ? score * 100 : 0,
                B: 100,
            },
            {
                subject: t("js-bootup"),
                A: jsBootup ? jsBootup * 100 : 0,
                B: 100,
            },
            {
                subject: t("interactive"),
                A: interactiveScore ? interactiveScore * 100 : 0,
                B: 100,
            },
            {
                subject: t("mobile"),
                A: m_score ? m_score * 100 : 0,
                B: 100,
            },
            ];

            return (
            <>
            <ResponsiveContainer width="80%" height="80%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
            <div className="radar__percentage">
                {data.map((info) => {
                    let textColor;
                    if (isEmpty(pageData)) textColor = 'gray';
                    else if (info.A > 66.66) textColor = 'green';
                    else if (info.A > 33.33) textColor = 'rgb(221, 144, 0)';
                    else if (info.A >= 0) textColor = 'red';

                    return <p style={{color: textColor}}><span>{info.subject}</span>: {(info.A).toFixed()}%</p>
                })}
            </div>
            </>
            );
        }
}
