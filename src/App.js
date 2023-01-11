import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import Data from "./components/Data";

function App() {
  const [data, setData] = useState(Data);
  return (
    <div className="App">
      <Form data={data} setData={setData} />
      <br />
      <br />
      <Table data={data} setData={setData} />
    </div>
  );
}

export default App;
