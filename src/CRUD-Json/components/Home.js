import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import Data from "./Data";
import { v4 as uuid } from "uuid";

const Home = ({ handleView }) => {
  //main state
  const [data, setData] = useState(Data);
  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  // edit
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);

  // add button

  const addNewData = () => {
    if (!name || !email || !phone || !gender || !status) {
      alert("please enter all the fields");
    } else {
      const newData = {
        id: uuid(),
        name,
        email,
        phone,
        gender,
        status,
      };
      setData([...data, newData]);
      setName("");
      setEmail("");
      setPhone("");
      setGender("");
      setStatus("");
    }
  };

  // delete

  const deleteData = (id) => {
    const deleteValue = data.filter((item) => {
      return item.id !== id;
    });
    setData(deleteValue);
  };

  //edit button from table - when press edit button, it will get all the data
  const handleEdit = (id) => {
    const specificItem = data.find((item) => item.id === id);
    setIsEdit(true);
    setEditID(id);
    setName(specificItem.name);
    setEmail(specificItem.email);
    setPhone(specificItem.phone);
    setGender(specificItem.gender);
    setStatus(specificItem.status);
  };

  // update data (after get the original data, you update this)
  const updateData = ({ handleView }) => {
    if (name && email && phone && gender && status && isEdit) {
      setData(
        data?.map((item) => {
          if (item.id === editID) {
            return { ...item, name, email, phone, gender, status };
          }
          return item;
        })
      );
      setName("");
      setEmail("");
      setPhone("");
      setGender("");
      setStatus("");
      setEditID(null);
      setIsEdit(false);
    }
  };

  return (
    <div>
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
        addNewData={addNewData}
        isEdit={isEdit}
        updateData={updateData}
      />
      <br /> <br />
      <Table
        deleteData={deleteData}
        data={data}
        handleEdit={handleEdit}
        handleView={handleView}
      />
    </div>
  );
};

export default Home;
