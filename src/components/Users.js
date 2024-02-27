import React from 'react';
import data from './UsersData';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <div className='card-container'>
      {
        data.map((eachUser)=>{
            const {id, name, email} = eachUser;
            return(
                <Link key={id} to={`/users/${id}`} >
                    <article className='card'>
                        <h3>{name}</h3>
                        <h5>{email}</h5>
                    </article>
                </Link>
            )
        })
      }
      </div>
    </div>
  )
}

export default Users
