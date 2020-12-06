import React,{useContext} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import {UserContext} from '../App';

import './NavLinks.css';

const NavLinks = () => {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = () => {
        if(state)
        {
            return[
                <li>
                <NavLink to="/" exact>HOME</NavLink>
                </li>,
                <li>
                <NavLink to="/menu" exact>MENU</NavLink>
                </li>,
                <li>
                <NavLink to="/order" exact>ORDER</NavLink>
                </li>,
                <li>
                <NavLink to="/feedback" exact>FEEDBACK</NavLink>
                </li>,
                <li>
                <button onClick={()=>{localStorage.clear()
                dispatch({type:"CLEAR"})
                history.push('/signin')
                }}>LOGOUT</button>
                </li>
            ]
        }
        else{
            return[
            <li>
            <NavLink to="/signin" exact>SIGNIN</NavLink>
            </li>,
            <li>
            <NavLink to="/signup" exact>SIGNUP</NavLink>
            </li>]
        }
    }
    return(
        <div>
        <ul className="nav-links">
            {renderList()}
        </ul>
        </div>
    );
};

export default NavLinks;