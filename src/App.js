import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import MainFile from './CRUD-Json/components/MainFile';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./NewCRUD-API/pages/Navbar";
import Home from "./NewCRUD-API/pages/Home";
import View from "./NewCRUD-API/pages/user/View";
import Edit from "./NewCRUD-API/pages/user/Edit";
import AddUser from "./NewCRUD-API/pages/user/AddUser";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      {/* <MainFile /> */}
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          <Route path="/view/:id" element={<View />} />
          <Route
            path="/edit/:id"
            element={
              <Edit
                data={data}
                setData={setData}
                name={name}
                setName={setName}
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddUser
                data={data}
                setData={setData}
                name={name}
                setName={setName}
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
