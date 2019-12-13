import React from 'react';
import Modal from '../index.js';


const BeerCardModal = (props) => {
    console.log(props)
    return (
        <Modal open={props.open} toggle={props.toggle} >
            <div className="name">{props.data.name}</div>
        </Modal>
    )
}

export default BeerCardModal;