import React from 'react';

import './card.css';


function Card(props){
	return (
		<div className="card">
					<div className="text">
							<p >{props.title}</p>
							<p >{props.date}</p>
					</div>
          <img className="flag" src={props.flag} alt={props.alt} />
		</div>
	);
}

export default Card;