import React, { useState } from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const {login} =useAuth();
    const [name,setName] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <label>Username</label>
      <input type="text" name="name" placeholder='enter username' value={name} onChange={(e)=> setName(e.target.value)} />
      <button onClick={() => {
        login(name);
        navigate("/", { replace:true });
      }
      }>Login</button>
    </div>
  )
}

export default Login;
