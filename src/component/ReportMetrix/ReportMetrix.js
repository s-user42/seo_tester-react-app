import './reportMetrix.css';

import ChangeDeviceBtn from '../ChangeDeviceBtn/ChangeDeviceBtn';

import speedometer_icon from '../../images/icons/speedometer.svg';
import bookmark_icon from '../../images/icons/bookmark-ribbon-7790.svg';
import check_mark_icon from '../../images/icons/check-mark-10120.svg';

const ReportMetrix = () => {
    return (
        <div className="report__metrix">
            <div className="report__metrix--head">
                <div className="report__main-info d-flex">
                    <img src={speedometer_icon} alt="metrix icon" />
                    <div className="report__metrix--title">UX & Performance Metrix</div>
                </div>

                <ChangeDeviceBtn/>
            
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
                        d
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

                </div>


            </div>

        </div>
    );
}
 
export default ReportMetrix;