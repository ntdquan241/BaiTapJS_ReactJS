import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function DashBoard() {
    var navigate = useNavigate();
    var [loginCheck, setLoginCheck] = useState(false);
    console.log(navigate);
    function handleProfile(){
        if(loginCheck)
        navigate('/dashboard/profile');
        else
            navigate('/dashboard');
    }
    function handleLoginChange(){
        setLoginCheck(true);
    }
  return (
    <div>
        <h1>DashBoard</h1>
        <p>This is....</p>
        <button onClick={handleProfile}>dashboard-profile</button>
        <button onClick={handleLoginChange}>Login</button>
        <Outlet/>
        
    </div>

  )
}

export default DashBoard