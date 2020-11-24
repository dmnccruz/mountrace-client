import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';

function LoginOrRegister() {
    // document.getElementById('registerForm').style.display = 'none';
    const [isActive, setIsActive] = useState(true)
    
    function clickIt() {
        setIsActive(false)
    }

    function clickIt2() {
        setIsActive(true)
    }

    return (
        <>
            <div className="loginRegister" id="registerForm" >
                {
                (!isActive) ?
                <Register onClick={() => clickIt2()}/>  
                :
                <Login onClick={() => clickIt()}/>
            }
            </div>
        </>
    )
}

export default LoginOrRegister;