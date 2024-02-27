import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {

    const navigate = useNavigate();

  

  return (
    <div>
      <h1>successfully submitted</h1>
      <button onClick={() => navigate('/')}>Back to home</button>
    </div>
  )
}

export default Success;
