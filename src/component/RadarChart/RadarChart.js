import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export default class RadarChartComponent extends PureComponent {

    
    render() {
            
        const {pageData} = this.props;
        const {score, m_score, interactiveScore, payloadScore, jsBootup} = pageData

        console.log(score, m_score)

        //legacy-javascript


        //unused-javascript
        
        //unused-css-rules
        //bootup-time

        const data = [
            {
                subject: 'Payload optimization',
                A: payloadScore ? payloadScore * 100 : 0,
                B: 100,
            },
            {
                subject: 'Desktop',
                A: score ? score * 100 : 0,
                B: 100,
            },
            {
                subject: 'JS Bootup',
                A: jsBootup ? jsBootup * 100 : 0,
                B: 100,
            },
            {
                subject: 'Interactive',
                A: interactiveScore ? interactiveScore * 100 : 0,
                B: 100,
            },
            {
                subject: 'Mobile',
                A: m_score ? m_score * 100 : 0,
                B: 100,
            },
            ];

            return (
            <ResponsiveContainer width="80%" height="80%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
            );
        }
}
