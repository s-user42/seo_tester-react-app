import './inputLinkPage.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';
import ErrorPopup from '../../component/ErrorPopup/ErrorPopup';
import { useSelector } from 'react-redux';

const InputLinkPage = ({onSubmit, errorMsg}) => {

    const inputRef = useRef();
    const loading = useSelector(state => state.loading);

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
            <MDBSpinner role='status'
            className='input__page--spinner'>
            <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        )
    }

    return (
        <div className="input-link--wrapper">
            <div className="input-link--container">
                
                <Form.Control 
                ref={inputRef}
                className='input-link--form'
                size="lg" 
                type="text" 
                placeholder="input web site link" />
                <Button 
                className='input__page--button'
                onClick={() => onSendLink()}
                variant="primary">
                    
                    {!loading ? <>Check SEO</> : null}
                    {loading ? <CustomSpinner/> : null}
                    
                </Button>
                {errorMsg ? <ErrorPopup errorMsg={errorMsg}/> : null}
            </div>  
        </div>
    );
}
 
export default InputLinkPage;