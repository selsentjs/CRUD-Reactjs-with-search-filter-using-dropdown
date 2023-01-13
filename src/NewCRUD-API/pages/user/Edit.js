import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const Edit = ({
  data,
  setData,
  name,
  setName,
  username,
  setUsername,
  email,
  setEmail,
}) => {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getSingleUser();
  }, []);

  const getSingleUser = async () => {
    const response = await axios.get(`http://localhost:5000/data/${id}`);
    setName(response.data.name);
    setUsername(response.data.username);
    setEmail(response.data.email);
  };

  // update user
  const updateUser = async () => {
    const response = await axios.put(`http://localhost:5000/data/${id}`, {
      name,
      username,
      email,
    });
    navigate("/");
    setData(response.data);
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary me-4"
            onClick={updateUser}
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
