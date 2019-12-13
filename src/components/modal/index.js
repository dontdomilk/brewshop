import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const Modal = ({children, type, id, open, toggle}) => {



    const ModalElement = () => {
        const [isOpen, setOpen] = useState(true);

        const [transition, setTransition] = useState('');

        useEffect(() => {
            if (isOpen === true) {
                setTransition('open')
            } else {
                setTransition('close')
            }
        }, [isOpen]);

        const handleToggle = () => {
            setOpen(!isOpen);
            toggle();
        };

        return (
            <div className={`modal-wrapper ${transition}`} >
                <div className="content-wrapper">
                    <div className="close" onClick={handleToggle}>X</div>
                    {children}
                </div>
            </div>
        )
    }

    return ( open ?
        ReactDOM.createPortal(
            <ModalElement/>,
            document.body
        )
            :  null
    )
};

export default Modal;