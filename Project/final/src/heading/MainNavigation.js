import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../App';

import NavLinks from './NavLinks';
import './MainNavigation.css';
import MainHeader from './MainHeader';

const MainNavigation = () => {
    const {state,dispatch} = useContext(UserContext)
    return(
        <React.Fragment>
            <MainHeader>
        
            <h1 className='main-navigation_title'>
                <Link to={state?"/":"/signin"}>FOOD ONLINE</Link>
            </h1>
            <nav className='main-navigation_option'>
                <NavLinks/>
            </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;