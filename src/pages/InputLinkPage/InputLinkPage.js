import './inputLinkPage.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';
import ErrorPopup from '../../component/ErrorPopup/ErrorPopup';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const InputLinkPage = ({onSubmit, errorMsg}) => {

    const { t } = useTranslation();

    const inputRef = useRef();
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        inputRef.current.focus();
        document.addEventListener('keydown', handleKeyDowm);
        return () => document.removeEventListener('keydown', handleKeyDowm);
    })

    const handleKeyDowm = (event) => {
        if (event.key === 'Enter' && !loading) {
            onSendLink();
        }
    }

    const onSendLink = () => {
        if (inputRef.current.value) {
            onSubmit(inputRef.current.value)
        }
    }

    const CustomSpinner = () => {
        return (
            <MDBSpinner role='status'
            className='input__page--spinner'>
            <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        )
    }

    return (
        <div className="input-link--wrapper">
            <div className="input-link--container">

                <p className='input__page--title'>
                {t("input-page-title")}
                </p>
                <p className='input__page--subtitle'>
                {t("input-page-subtitle")}
                </p>

                <div className="form__container">
                    <Form.Control 
                    ref={inputRef}
                    className='input-link--form'
                    size="lg" 
                    type="text" 
                    placeholder={t("input-placeholder")} />
                    <Button 
                    disabled={loading}
                    className='input__page--button'
                    onClick={() => onSendLink()}
                    variant="primary">
                        
                        {!loading ? <>{t("check-seo-input-page")}</> : null}
                        {loading ? <CustomSpinner/> : null}
                        
                    </Button>
                    {errorMsg ? <ErrorPopup errorMsg={errorMsg}/> : null}
                </div>
            </div>  
        </div>
    );
}
 
export default InputLinkPage;