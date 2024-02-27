import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useAuth } from './auth';
const Home = () => {

  const navigate = useNavigate();
 
  const data = useAuth();
  console.log(data);


  const navigateToSuccessPage = () =>{
    navigate('/success');
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={navigateToSuccessPage}>submit form</button>
    </div>
  )
}

export default Home;
