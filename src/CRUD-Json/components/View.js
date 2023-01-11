import React from "react";
import { NavLink } from "react-router-dom";
const View = ({ details }) => {
  return (
    <div>
      <table style={{ marginTop: "30px" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <>
            <tr key={details.id}>
              <td>{details.id}</td>
              <td>{details.name}</td>
              <td>{details.email}</td>
              <td>{details.phone}</td>
              <td>{details.gender}</td>
              <td>{details.status}</td>
            </tr>
          </>
        </tbody>
      </table>
      <br />
      <br />
      <NavLink to="/">
        <button>Go Back</button>
      </NavLink>
    </div>
  );
};

export default View;
