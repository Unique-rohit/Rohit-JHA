import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React from 'react'

const Card = ({ title, price, description, category, image }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <p className="card-text">{category}</p>
            </div>
            {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div> */}
        </div>
    );
};

export default Card