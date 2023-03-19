import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../redux/contactSlice";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div className="item">
      <span className="firstPart">{item.name}</span>
      <span className="firstPart">{item.phone_number}</span>
      <div className="edit">
        <span>
          <Link to={`/edit/${item.id}`}>Edit</Link>
        </span>
        <span className="deleteButton" onClick={() => handleDelete(item.id)}>
          X
        </span>
      </div>
    </div>
  );
}

export default Item;
