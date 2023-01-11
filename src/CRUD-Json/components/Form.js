import React from "react";

const Form = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  gender,
  setGender,
  status,
  setStatus,
  addNewData,
  isEdit,
  updateData
}) => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>CRUD</h1>
        <label htmlFor="name"> Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="phone"> Phone: </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="sex">Sex:</label>
        <input
          type="checkbox"
          id="box1"
          value={gender}
          checked={gender === "Male"}
          onChange={() => setGender("Male")}
        />
        <label htmlFor="box1">Male</label>

        <input
          type="checkbox"
          id="box2"
          value={gender}
          checked={gender === "Female"}
          onChange={() => setGender("Female")}
        />
        <label htmlFor="box2">Female</label>
        <br />
        <br />
        <label htmlFor="status">Status: </label>
        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Please Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <br />
        <br />
        {isEdit ? (
          <button onClick={updateData}>Update Data</button>
        ) : (
          <button onClick={addNewData}>Add Data</button>
        )}
      </form>
    </div>
  );
};

export default Form;
