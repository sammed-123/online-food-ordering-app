import React from 'react';

import List1 from './List1';
import './Foodlist.css';

const Foodlist = () => {
    const FOODLIST = [
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/India_food.jpg/180px-India_food.jpg',
            name:'Biryani',
            price:'250',
            min:'30',
            about:'Mixed rice dish, optional spices, optional vegetables, meats or seafood.',
            type_of_dish:'main_dish'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/180px-Chicken_makhani.jpg',
            name:'Butter Chicken',
            price:'340',
            min:'45',
            about:'dish, originating in the Indian subcontinent, of chicken in a mildly spiced tomato sauce. ',
            type_of_dish:'main_dish'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Dal_Makhani.jpg/180px-Dal_Makhani.jpg',
            name:'Dhal Makhani',
            price:'200',
            min:'40',
            about:'Assorted types of lentils, such as toor, urad, chana, masoor dal',
            type_of_dish:'main_dish'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Chana_masala.jpg/180px-Chana_masala.jpg',
            name:'Chole Bhature',
            price:'180',
            min:'25',
            about:'Main course with Chick peas, assorted spices, wheat flour and bhatura yeast.',
            type_of_dish:'main_dish'
        },
        {
            image:'https://myfoodstory.com/wp-content/uploads/2016/03/Dhaba-Style-Dal-Fry-3-1.jpg',
            name:'Dal Fry',
            price:'190',
            min:'15',
            about:'Typical north Indian tadka .A main course with lentils',
            type_of_dish:'main_dish'
        },
        {
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Poha%2C_a_snack_made_of_flattened_rice.jpg/180px-Poha%2C_a_snack_made_of_flattened_rice.jpg',
            name:'Poha',
            price:'120',
            min:'20',
            about:'Specialty from Madhya Pradesh. Common snack in central part of India.',
            type_of_dish:'main_dish'
        }
       
    ]
    return(
        <div className='Foodlist_bg'>
            <p className='menu_name'>MENU</p>
            <List1 items={FOODLIST}/>
        </div>
        );
};

export default Foodlist;