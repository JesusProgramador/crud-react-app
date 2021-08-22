import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const LinkForm = ({ addOrEditLink, currentId, links }) => {
  const initialValues = {
    url: "",
    name: "",
    description: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditLink(values);
    setValues({ ...initialValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialValues });
    } else {
      getLinkById(currentId);
    }
  }, [currentId]);

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group p-2">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          onChange={handleInputChange}
          value={values.url}
          type="text"
          className="form-control text-light"
          placeholder="https://someurl.com"
          name="url"
        />
      </div>

      <div className="form-group input-group p-2">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>

        <input
          onChange={handleInputChange}
          type="text"
          value={values.name}
          className="form-control text-light"
          name="name"
          placeholder="Website name"
        />
      </div>

      <div className="form-group p-2">
        <textarea
          onChange={handleInputChange}
          name="description"
          rows="3"
          className="form-control text-light"
          placeholder="Write a description"
        ></textarea>
      </div>

      <button className="btn btn-primary btn-block m-2">
        {currentId === "" ? "Save" : "Update"}
      </button>
    </form>
  );
};

export default LinkForm;
