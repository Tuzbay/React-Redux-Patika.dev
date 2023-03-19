import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contactSlice";
import { useNavigate } from "react-router-dom";

function EditForm({ contact }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phone_number: number,
        },
      })
    );
    navigate("/");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={number}
          placeholder="phone number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditForm;
