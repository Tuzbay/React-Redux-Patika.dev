import React from "react";

import { Navigate, useParams } from "react-router-dom";
import EditForm from "./EditForm";

import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";

function Edit() {
  const { id } = useParams();

  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );

  if (!contact) {
    return <Navigate to="/" />;
  }

  console.log(contact);
  return (
    <div className="editPage">
      <h1>Edit</h1>
      <EditForm contact={contact} />
    </div>
  );
}

export default Edit;
