import React, { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
const Home = ({ data, setData }) => {
  useEffect(() => {
    getUsers();
  }, []);

  // get all data
  const getUsers = async () => {
    const response = await axios.get(`http://localhost:5000/data`);
    setData(response.data);
  };

  // delete data

  const deleteData = async (id) => {
    const response = await axios.delete(`http://localhost:5000/data/${id}`);
    if (window.confirm("Are you sure you want to delete this record?")) {
      setData(response.data);
      toast.error("recode is deleted", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    getUsers();
  };

  return (
    <div className="container">
      <h1>User Details</h1>
      <table className="table table-dark mt-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0
            ? data?.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>
                        <NavLink to={`/view/${item.id}`}>
                          <button className="btn btn-info me-4">View</button>
                        </NavLink>
                        <NavLink to={`/edit/${item.id}`}>
                        <button className="btn btn-success me-4">Edit</button>
                        </NavLink>
                        <button className="btn btn-warning" onClick={() =>deleteData(item.id)}>Delete</button>
                      </td>
                    </tr>
                  </>
                );
              })
            : "No record found"}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
