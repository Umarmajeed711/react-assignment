import React from 'react';

import logo from '../assets/image.png';

function Card(props){
    return(
        <div className="body">
        <div className="Card">
            <div>
            <img src={logo} alt="logo" width={200} height={200} />
            </div>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.position}</h2>
                 <hr />
                 <ul className='list'>
                    <li>{props.number}</li>
                    <li>{props.email}</li>
                    <li>{props.address}</li>
                 </ul>
            </div>
           
        </div>

        </div> 
    )
}

export default Card;