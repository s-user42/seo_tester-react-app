import './inputComponent.css';
import { Dropdown } from 'react-bootstrap';

import ErrorPopup from '../ErrorPopup/ErrorPopup';

import change_language from '../../images/icons/change_language.png';

import { MDBSpinner } from 'mdb-react-ui-kit';
import { Form, Button } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const InputComponent = ({onSubmit, errorMsg}) => {

    const dispatch = useDispatch();
    const language = useSelector(state => state.language);
    const loading = useSelector(state => state.loading);

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        document.addEventListener('keydown', handleKeyDowm);
        return () => document.removeEventListener('keydown', handleKeyDowm);
    })

    const handleKeyDowm = (event) => {
        if (event.key === 'Enter') {
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
            <MDBSpinner role='status' style={{
                width: 15,
                height: 15
            }}>
            <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        )
    }

    console.log(language)


    const changeLanguage = (lang) => {
        dispatch({type: 'language', payload: lang})
    }

    return (
        <div className="input__component--wrapper">
            <div className="input__component--container">
                <Form.Control 
                ref={inputRef}
                className='input__component--form'
                size="sm" 
                type="text" 
                placeholder="input web site link" />
                <Button 
                className='input__component--button'
                onClick={() => onSendLink()}
                size='sm'
                variant="primary">
                    
                    {!loading ? <>Check SEO</> : null}
                    {loading ? <CustomSpinner/> : null}
                
                </Button>
                {errorMsg ? <ErrorPopup errorMsg={errorMsg}/> : null}

                <Dropdown>
                    <Dropdown.Toggle variant='' id="dropdown-basic">
                        <img className='language__icon' src={change_language} alt="language icon" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item 
                        style={{color: language === "en" ? 'blue' : ''}}
                        onClick={() => changeLanguage("en")}>EN (English)</Dropdown.Item>
                        <Dropdown.Item 
                        style={{color: language === "ro" ? 'blue' : ''}}
                        onClick={() => changeLanguage("ro")}>RO (Romanian)</Dropdown.Item>
                        <Dropdown.Item 
                        style={{color: language === "ru" ? 'blue' : ''}}
                        onClick={() => changeLanguage("ru")}>RU (Russian)</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        </div>
    );
}
 
export default InputComponent;