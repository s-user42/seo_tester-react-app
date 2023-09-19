import './changeDeviceBtn.css';

import { useState } from "react";

import pc_icon from '../../images/icons/desktop_icon.png';
import mob_icon from '../../images/icons/mobile_icon.png';

const ChangeDeviceBtn = ({changeDevice}) => {

    const [device, setDevice] = useState("pc");

    const toggleDevice = () => {
        changeDevice();
        if (device === "pc") setDevice("ph");
        else if (device === "ph") setDevice("pc");
    }

    const buttonClass = device === "pc" ? "change-device-btn" : "change-device-btn change-device-btn--mobile";
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