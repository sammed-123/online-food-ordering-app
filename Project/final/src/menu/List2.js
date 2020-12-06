import React from 'react';

import './List2.css';

const List2 = props =>{
    return(
        <div className='list2'>
            <div className='list2_table'>    
                <div className='list2_card'> 
                    <div className='list2_content'>
                        <img 
                            src={props.image}
                            alt={props.name}
                        />
                        <div className='list_info'>
                            <p id='name'>{props.name}</p>
                            <hr/>
                            <p id='line2'><span id='min'>{props.min}{props.min===1?' minute':' minutes'}</span><span id='price'><strong>Rs. </strong><span>{props.price}</span></span></p>
                           <br/> <p id='about'>{props.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List2;