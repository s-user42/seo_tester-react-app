import { useEffect, useState } from 'react';
import './errorPopup.css';

const ErrorPopup = ({errorMsg}) => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, 5000)
    }, [])
    
    return isVisible ? (
        <div className="error__msg">
            <p className="msg__text">{errorMsg} error!</p>
        </div>
    ) : null;
}
 
export default ErrorPopup;