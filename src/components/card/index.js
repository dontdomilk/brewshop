import React from 'react';
import './style.scss';

const Card = ({name, firstBrewed, description, imageUrl, foodPairing}) => {

    return (
        <div className="card">
            <div className="img-wrapper">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="text-wrapper">
                <div className="name">{name}</div>
                <div className="date">{firstBrewed}</div>
                <p className="description">{description}</p>
                <div className="pairing">{foodPairing}</div>
            </div>
        </div>
    )
};

export default Card;