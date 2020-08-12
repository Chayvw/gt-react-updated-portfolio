import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.src} />
      </div>
      <div className="content">
        <ul>
          {/* <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Image:</strong> {props.image}
          </li> */}
          <li>
            <strong>Deployed:</strong> <a href= {props.link} target ="_blank">{props.title}</a>
          </li>
        </ul>
      </div>
            
        </div>
    );
};

export default Card;