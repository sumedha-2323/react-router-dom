import React from 'react'
import { useParams } from 'react-router-dom';
import data from './UsersData';

const UsersDetails = () => {

  const {userId} = useParams();
  // console.log(params);

  const userDetailsData = data.find((eachUser) => eachUser.id == userId);

  return (
    <div>
      <h1>Users Details</h1>

      <h2>{userDetailsData.name}</h2>
      <h3>{userDetailsData.email}</h3>
      <h3>{userDetailsData.username}</h3>
    </div>
  )
}

export default UsersDetails;
