import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const Modal = ({children, type, id, open}) => {

    const ModalElement = () => {
        console.log(children)
        return (
            <div className="modal-wrapper" >
                <div className="content-wrapper">
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