import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.src} />
      </div>
      <div className="content">
        <ul>
         
          <li>
            <strong>Deployed:</strong> <a href= {props.link} target ="_blank" rel="noopener noreferrer" >{props.title}</a>
          </li>
        </ul>
      </div>
            
        </div>
    );
};

export default Card;