import React from "react";
import { NavLink } from "react-router-dom";

const Table = ({ data, deleteData, handleEdit, handleView }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data?.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.gender}</td>
                    <td>{item.status}</td>
                    <td>
                      <button onClick={() => handleEdit(item.id)}>Edit</button>
                      <button onClick={() => deleteData(item.id)}>
                        Delete
                      </button>
                      <NavLink to={`/view/${item.id}`}>
                        <button onClick={() => handleView(item)}>View</button>
                      </NavLink>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <h3>No data available</h3>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
