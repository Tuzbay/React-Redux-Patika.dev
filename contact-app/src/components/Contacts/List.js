import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { contactSelectors, deleteContacts } from "../../redux/contactSlice";
import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContacts());
    }
  };

  return (
    <div className="list">
      {total > 1 && (
        <div className="deleteAll" onClick={() => handleDeleteAll()}>
          Delete All
        </div>
      )}

      {contacts.map((contact) => (
        <Item key={contact.id} item={contact} />
      ))}
    </div>
  );
}

export default List;
