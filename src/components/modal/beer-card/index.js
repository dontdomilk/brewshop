import React from 'react';
import Modal from '../index.js';


const BeerCardModal = (props) => {
    console.log(props.data)

    const {data} = props;
    const {basic, recipe} = data;

    return (
        <Modal open={props.open} toggle={props.toggle} >
            <div className="name">{basic.name}</div>
        </Modal>
    )
}

export default BeerCardModal;