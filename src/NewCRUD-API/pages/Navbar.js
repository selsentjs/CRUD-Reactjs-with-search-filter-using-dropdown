import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link btn btn-light text-primary" aria-current="page" to="/add">
                Add Users
              </NavLink>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
