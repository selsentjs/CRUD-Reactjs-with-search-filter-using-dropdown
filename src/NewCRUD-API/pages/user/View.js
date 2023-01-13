import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const View = () => {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  // ============= get single user ====================================

  useEffect(() => {
    getSingleUser();
  },[]);

  const getSingleUser = async () => {
    const response = await axios.get(`http://localhost:5000/data/${id}`);
    setUser(response.data);
  
  };
  //=============================================================================

  return (
    <div className="container">
      <table className="table table-primary mt-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
      <NavLink to='/'><button className='btn btn-primary mt-5'>Go to Home</button></NavLink>
    </div>
  );
};

export default View;
