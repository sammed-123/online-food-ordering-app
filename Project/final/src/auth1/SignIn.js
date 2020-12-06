import React,{useState,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../App';
import './SignIn.css';

const SignIn = () => {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
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
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.error){         
                var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
            else
            {
               // localStorage.setItem("jwt",data.token)
               // localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data.user})
                history.push('/');
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className='main-oldAuth_form'>
            <div className='oldAuth_form'>
                <span id='oldAuth-span'>FOOD ONLINE</span><br/>
                <hr/><br/><br/>
                
                    <input type='text'  size='40' placeholder='EMAIL'  id='oldAuth-username' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                    <input type='password' size='40' placeholder='PASSWORD' id='oldAuth-password' value={password } onChange={(e)=>setPasword(e.target.value)}/><br/><br/>
                    <button type='submit' className='oldAuth-button' onClick={()=>PostData()}>Submit</button><br/><br/>
                    <small id='oldAuth-small'><strong>Not a member ? </strong><span><Link to='/signup'>Sign up</Link></span></small>
                    <div id="snackbar">FILL  ALL  THE  FIELD</div>
            </div>
        </div>
    );
};


export default SignIn;