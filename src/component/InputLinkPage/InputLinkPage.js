import './inputLinkPage.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useEffect, useRef } from 'react';

const InputLinkPage = ({onSubmit}) => {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        document.addEventListener('keydown', handleKeyDowm);
        return () => document.removeEventListener('keydown', handleKeyDowm);
    })

    const handleKeyDowm = (event) => {
        if (event.key === 'Enter') {
            console.log(12)
            onSendLink();
        }
    }

    const onSendLink = () => {
        if (inputRef.current.value) {
            onSubmit(inputRef.current.value)
        }
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
                onClick={() => onSendLink()}
                variant="primary">Check SEO</Button>
                
            </div>  
        </div>
    );
}
 
export default InputLinkPage;