import './errorPopup.css';

const ErrorPopup = ({errorMsg}) => {
    
    return (
        <div className="error__msg">
            <p className="msg__text">{errorMsg} error!</p>
        </div>
    );
}
 
export default ErrorPopup;