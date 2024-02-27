import React from 'react';
import {NavLink} from 'react-router-dom';
import { useAuth } from './auth';

const Navbar = () => {

  const {user, logout} = useAuth();
  // console.log(data);

  const navlinkStyles = ({isActive}) =>{
      // console.log(someObj);
      // return {};
      return {
        textDecoration: isActive ? 'none' : 'underline',
        fontWeight: isActive ? 'bold' : 'normal',
    
      }
  }

  return (
    <div>
      {/* <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>

      </nav> */}
     
   

      <nav className='primary-nav'>
          <NavLink style={navlinkStyles} to='/'>Home</NavLink>
          <NavLink style={navlinkStyles}  to='/about'>About</NavLink>
          <NavLink style={navlinkStyles}  to='/contact'>Contact</NavLink>
          <NavLink style={navlinkStyles}  to='/projects'>Projects</NavLink>
          <NavLink style={navlinkStyles} to='/users'>Users</NavLink>
          {
            user ? 
            <NavLink style={navlinkStyles} to='/logout' onClick={logout}>Logout</NavLink> :
            <NavLink style={navlinkStyles} to='/login'>Login</NavLink> 

          }
      </nav>
    </div>
  )
}

export default Navbar;
