import React from 'react';
import {Link} from 'react-router-dom';


import './Basic.css';

const Basic = () => {
    return(
       <div>
           
            <div className='bg2'>
                <p id='basic_h1'>Food that you can't resist</p>
                <p id='basic_h2'>enjoy the marvelous taste</p>
                <p id='basic_p'>We deliver good quality food with<br/> great service to customers.</p>
                <span className='basic_link'>
                    <Link to='/menu' >Get Started</Link>
                </span>
            </div>
            <div className='bg3'> 
                <div className='bg31'>
                    <div className='container'>
                        <div className='card'>
                            <div className='face face1'>
                                <div className='contain'>
                                    <h2>BREAKFAST</h2>
                                    <p>Welcome Sir. There are various types of items in our 
                                        hotel. You can choice anyone you want. And our food 
                                        is very fine and delicoius.
                                    </p>
                                </div>
                            </div>
                            <div className='face face2'>
                                <h2>BREAKFAST ITEMS</h2>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='card'>
                            <div className='face face1'>
                                <div className='contain'>
                                    <h2>LUNCH</h2>
                                    <p>Welcome Sir. There are various types of items in our 
                                        hotel. You can choice anyone you want. And our food 
                                        is very fine and delicoius.
                                    </p>
                                </div>
                            </div>
                            <div className='face face2'>
                                <h2>LUNCH ITEMS</h2>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='card'>
                            <div className='face face1'>
                                <div className='contain'>
                                    <h2>DINNER</h2>
                                    <p>Welcome Sir. There are various types of items in our 
                                        hotel. You can choice anyone you want. And our food 
                                        is very fine and delicoius.
                                    </p>
                                </div>
                            </div>
                            <div className='face face2'>
                                <h2>DINNER ITEMS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg4'><br/>
                <div className='home_bottom'>
                    <div className='home_bottom_ad'>
                        <p className='home_bottom_head'><br/>Address :</p>
                        <p className='home_bottom_inf'><br/>93/A,  XYZ Shop<br/>100 Feet Ring Road, BSK III Stage <br/>Bangalore - 560 085</p>
                    </div>
                    <div className='home_bottom_em'><br/>
                        <p className='home_bottom_head'>Email :</p>
                        <br/>
                        <p className='home_bottom_inf'> samarthkumar762@gmail.com <br/>saketmishra123@gmail.com</p>
                    </div>
                    <div className='home_bottom_ph'><br/>   
                        <p className='home_bottom_head'>Phone :</p>
                        <br/>
                        <p className='home_bottom_inf'>+91 7023385123<br/>+91 9620512422</p>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Basic;