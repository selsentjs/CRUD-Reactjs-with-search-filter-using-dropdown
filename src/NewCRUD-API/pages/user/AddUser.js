import React from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const AddUser = ({ data, setData,name,username,email,setName,setUsername,setEmail }) => {
 
  const navigate = useNavigate();

  // add new user
  const addUser = async () => {
    const response = await axios.post(`http://localhost:5000/data`, {
      id: uuid(),
      name,
      username,
      email,
    });
    toast.success("user added successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/");
    setData([...response.data, data]);
   
    
  };
//=================================================================================
  return (
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
          onClick={addUser}
        >
          Add User
        </button>
       
      </form>
    </div>
  );
};

export default AddUser;
