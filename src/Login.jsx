import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react';
function Login() {
    const[pwd1,setPwd1] = useState("");
    const[pwd2,setPwd2] = useState("");
    const[same,setSame] = useState(null);

    function handlePwd1Change(event){
        setPwd1(event.target.value);

    }
    function handlePwd2Change(event){
    const value = event.target.value;
    setPwd2(value);

    if(value === ""){
        setSame(null);     // nothing typed → no message
    }
    else if(pwd1 === value){
        setSame(true);     // match
    }
    else{
        setSame(false);    // not match
    }
}
    function handlePasswordCheck(event){
    }
    return(
        <>
        <form className = "my-5"style = {{width:"50%",margin:"auto"}}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" />
        
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input value = {pwd1} onChange={handlePwd1Change}type="password" className="form-control" />
            </div>
              <div className="mb-3">
                <label  className="form-label">Confirm Password</label>
                <input value = {pwd2} onChange={handlePwd2Change}type="password" className="form-control" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label  className="form-check-label">I Agree</label>
            </div>
            {same === true && <p>Passwords match</p>}
            {same === false && <p>Passwords do not match</p>}
            <button type="submit" className="btn btn-primary">Create Account</button>
</form>
        </>

    )
}
export default Login;