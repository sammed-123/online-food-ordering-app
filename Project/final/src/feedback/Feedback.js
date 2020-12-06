import React from 'react';

import './Feedback.css';

const Feedback = () => {
    return(
        <div className='main_feedback_form'>
            <div className='feedback_form'>
                <span id='feedback-span'>FEEDBACK FORM</span><br/>
                <hr/><br/><br/>
                <form>
                    <label className='feedback-label'>First Name</label><br/>
                    <input type='text'  size='40' placeholder='Saket' maxlength='15' className='feedback-input'/><br/><br/>
                    <label className='feedback-label'>Last Name</label><br/>
                    <input type='text' size='40' placeholder='Mishra' maxlength='15' className='feedback-input'/><br/><br/>
                    <label className='feedback-label'>State</label><br/>
                    <input type='text' placeholder='Bihar' size='40' maxlength='15' className='feedback-input'/><br/><br/>
                    <label className='feedback-label'>E-mail</label><br/>
                    <input type='email' placeholder='xyz@gmail.com' size='40' className='feedback-input'/><br/>
                    <small>We'll never share your email with anyone else.</small><br/><br/>
                    <label className='feedback-label'>Food Quality</label><br/>
                    <select className='feedback-select'>
                        <option value='1'>Very Good</option>
                        <option value='2'>Good</option>
                        <option value='3'>Fair</option>
                        <option value='4'>Poor</option>
                        <option value='5'>Very Poor</option>
                    </select><br/><br/>
                    <label className='feedback-label'>Feedback</label><br/>
                    <textarea placeholder='Write your Feedback' rows='5' cols='36' id='feedback-textarea'></textarea><br/><br/>
                    <button type='submit' id='feedback-button'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;