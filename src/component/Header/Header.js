import './header.css';
import { Dropdown } from 'react-bootstrap';

import ErrorPopup from '../ErrorPopup/ErrorPopup';

import change_language from '../../images/icons/change_language.png';

import { MDBSpinner } from 'mdb-react-ui-kit';
import { Form, Button } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../helper/useLocalStorage';

const InputComponent = ({onSubmit, errorMsg}) => {

    const dispatch = useDispatch();

    const language = useSelector(state => state.language);
    const loading = useSelector(state => state.loading);
    const link = useSelector(state => state.link);

    const [, setLang] = useLocalStorage('lang');

    const {t, i18n} = useTranslation();

    const inputRef = useRef();

    useEffect(() => {
        if (link) inputRef.current.focus();
        document.addEventListener('keydown', handleKeyDowm);
        return () => document.removeEventListener('keydown', handleKeyDowm);
    })

    const handleKeyDowm = (event) => {
        if (event.key === 'Enter' && link) {
            onSendLink();
        }
    }

    const onSendLink = () => {
        if (inputRef.current.value && link) {
            onSubmit(inputRef.current.value)
        }
    }

    const CustomSpinner = () => {
        return (
            <MDBSpinner role='status' style={{
                width: 15,
                height: 15
            }}>
            <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        )
    }


    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLang(lang);
        dispatch({type: 'language', payload: lang})
    }

    return (
        <div className="header__wrapper">
            <div className="header__container">

                <div 
                onClick={loading ? null : () => dispatch({type: "link", payload: null})}
                className='header__title'>SEO <span>Checker</span></div>

                {link ? 
                <>
                <Form.Control 
                ref={inputRef}
                className='input__component--form'
                size="sm" 
                type="text" 
                placeholder={t('input-placeholder')} />
                <Button 
                className='input__component--button'
                onClick={() => onSendLink()}
                size='sm'
                variant="primary">
                    
                    {!loading ? <>{t('check-seo')}</> : null}
                    {loading ? <CustomSpinner/> : null}
                
                </Button> 
                </>: null
                }
                {errorMsg ? <ErrorPopup errorMsg={errorMsg}/> : null}

                <Dropdown>
                    <Dropdown.Toggle variant='' id="dropdown-basic">
                        <img className='language__icon' src={change_language} alt="language icon" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item 
                        style={{color: language === "en" ? 'blue' : ''}}
                        onClick={() => changeLanguage("en")}>EN ({t('eng')})</Dropdown.Item>
                        <Dropdown.Item 
                        style={{color: language === "ro" ? 'blue' : ''}}
                        onClick={() => changeLanguage("ro")}>RO ({t('rom')})</Dropdown.Item>
                        <Dropdown.Item 
                        style={{color: language === "ru" ? 'blue' : ''}}
                        onClick={() => changeLanguage("ru")}>RU ({t('rus')})</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        </div>
    );
}
 
export default InputComponent;