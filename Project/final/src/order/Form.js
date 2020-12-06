import React from 'react';

import './Form.css';

const Form = () => {
    return(
        <div className='main-order_form'>
            <div className='order_form'>
                <span id='order-span'>ORDER FROM</span><br/>
                <hr/><br/><br/>
                <form>
                    <input type='text'  size='16' placeholder='First Name' maxlength='15' id='order-fname'/><span>  </span>
                    <input type='text' size='16' placeholder='Last Name' id='order-lname'/><br/><br/>
                    <input type='tel' placeholder='Phone Number' size='39' pattern='[6-9]{1}[0-9]{9}' maxlength='15' id='order-phone'/><br/><br/>
                    <input type='email' placeholder='xyz@gmail.com' size='39' id='order-email'/><br/><br/>
                    <input type='text' size='39' placeholder='Starter' id='order-starter'/><br/><br/>
                    <input type='text' size='39' placeholder='Main Course' id='order-mcourse'/><br/><br/>
                    <input type='text' placeholder='Address' size='39' id='order-address'/><br/><br/>
                    <input type='text' placeholder='City' size='16' maxlength='20' id='order-city'/><span>  </span>
                    <input type='text' placeholder='State' size='16' maxlength='20' id='order-state'/><br/><br/>
                    <button type='submit' className='order-button'>Submit</button><br/><br/>
                    <small id='order-small'><strong><ins>24x7 Food Service are available.</ins></strong></small>
                </form>
            </div>
        </div>
    );
};

export default Form;