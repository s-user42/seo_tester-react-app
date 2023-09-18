import './inputComponent.css';

import ErrorPopup from '../ErrorPopup/ErrorPopup';

import { MDBSpinner } from 'mdb-react-ui-kit';
import { Form, Button } from 'react-bootstrap';
import { useEffect, useRef } from 'react';

const InputComponent = ({onSubmit, errorMsg, loading}) => {

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
            </div>
        </div>
    );
}
 
export default InputComponent;