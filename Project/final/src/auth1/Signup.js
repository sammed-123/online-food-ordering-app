import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
                
                    var x = document.getElementById("snackbar1");
                    x.className = "show";
                    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
               
        }
        else
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){         
                var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
            else
            {
                history.push('/signin');
            }
        }).catch(err=>{
            console.log(err)
        })
    
    }
    return(
        <div className='main-oldAuth_form'>
        <div className='newAuth_form'>
            <span id='oldAuth-span'>FOOD ONLINE</span><br/>
            <hr/><br/><br/>
            
            <input type='text' size='40' placeholder='NAME' id='oldAuth-name' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <input type='text'  size='40' placeholder='EMAIL' id='oldAuth-username' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                <input type='text' size='40' placeholder='PASSWORD' id='oldAuth-password' value={password } onChange={(e)=>setPasword(e.target.value)}/><br/><br/>
                <button  className='oldAuth-button' onClick={()=>PostData()}>Submit</button><br/><br/>
                <small id='oldAuth-small'><strong>Already a member ? </strong><span><Link to='/signin'>Sign in</Link> </span></small>
                <div id="snackbar">FILL  ALL  THE  FIELD</div>
                <div id="snackbar1">ENTER  CORRECT  EMAIL</div>
        </div>
    </div>
    );
};

export default Signup;