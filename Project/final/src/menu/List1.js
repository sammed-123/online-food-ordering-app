import React from 'react';


import List2 from './List2';
import './List1.css';

const List1 = props => {
    return (
        <ul className='list1'>
            {props.items.map(fooditem=>(
                <List2
                    image={fooditem.image}
                    name={fooditem.name}
                    price={fooditem.price}
                    min={fooditem.min}
                    about={fooditem.about}
                    tdish={fooditem.type_of_dish}
                />
            ))}
        </ul>
    );
}

export default List1;