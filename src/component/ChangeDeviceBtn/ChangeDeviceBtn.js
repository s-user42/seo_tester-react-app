import './changeDeviceBtn.css';

import pc_icon from '../../images/icons/desktop_icon.png';
import mob_icon from '../../images/icons/mobile_icon.png';

const ChangeDeviceBtn = ({changeDevice, isMobile}) => {

    const toggleDevice = () => {
        changeDevice(!isMobile)
    }

    const buttonClass = !isMobile ? "change-device-btn" : "change-device-btn change-device-btn--mobile";
    return (
        <button 
        onClick={toggleDevice}
        tabIndex='0'
        className={buttonClass}>
            <div className="change-device-btn--elem">
                <img src={pc_icon} alt="pc" 
                className="change-device-btn--icon"/>
                <p>Desktop</p>
            </div>

            <div className="change-device-btn--elem">
                <img src={mob_icon} alt="phone" 
                className="change-device-btn--icon"/>
                <p>Phone</p>
            </div>
        </button>
    );
}
 
export default ChangeDeviceBtn;