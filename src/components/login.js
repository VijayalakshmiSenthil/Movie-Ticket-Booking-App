import { useEffect, useState } from "react";
import { emailValidator, passwordValidator } from "./validation";
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function LoginForm(){
    const [input,setInput] =useState({email:'',password:''});
    const [errormsg,setErrormsg] =useState('')
    const navigate = useNavigate();

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]: e.target.value})
    }

    useEffect(()=>{
        if(localStorage.getItem('auth'))
        navigate('/') 
    },[])
    
    const formSubmit=(e)=>{
        e.preventDefault();

        if(!emailValidator(input.email)){
            return setErrormsg('Please enter Valid email id');
        }

        if(!passwordValidator(input.password)){
            return setErrormsg('Password must be in the format eg: movies@456');
        }

        navigate('/')
        localStorage.setItem('auth',true)
    }
    return(
        <>
        <div className="login">
        <div className="box-container">
        <h3>Login</h3><br/>
            <form>
                {errormsg.length > 0 && <div style={{color:'red', marginBottom:'10px'}}>{errormsg}</div>}
                <input type="email" class="form-control box" placeholder="email" name="email" id="email" onChange={handleChange}/><br/>
                <input type="password" class="form-control box" placeholder=" password" name="password" id="password" onChange={handleChange}/>
                <a  className="link" href="#">Forget Password?</a>
            </form><br/>
            <button type="button" className="btn" onClick={formSubmit}>LOGIN</button><br/>
            <div>OR</div><br/>
            <GoogleOAuthProvider clientId="1071509469906-1ofo1vi4mkvlvsfsp58qs0ksinndam1c.apps.googleusercontent.com">
            <GoogleLogin
            onSuccess={credentialResponse => {
                const details = jwt_decode(credentialResponse.credential);
                console.log(details);
                console.log(credentialResponse);
                navigate('/') 
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />
            </GoogleOAuthProvider>
        </div>
        </div>
        </>
    );
}
export default LoginForm;




/* google auth 

    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        setUser(userObject)
        navigate('/Home')
    }


    useEffect(() => {
        /* global google 
        google.accounts.id.initialize({
            client_id:"1071509469906-1ofo1vi4mkvlvsfsp58qs0ksinndam1c.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signIn"),
            {theme:"outline", size:"large"}
            
        )

    },[])
    return(
        <>
        <div id="signIn" ></div>
        </>
    );
}
export default LoginForm;

*/






