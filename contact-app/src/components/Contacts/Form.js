import React from "react";
import { useState } from "react";

import { nanoid } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    // const names = name.split(",");

    // const data = names.map((name) => ({ id: nanoid(), name }));

    // dispatch(addContacts(data));

    dispatch(addContact({ id: nanoid(), name, phone_number: number }));
    setName("");
    setNumber("");
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
        <input
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          placeholder="phone number"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
