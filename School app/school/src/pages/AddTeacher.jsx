import React, { useEffect, useState } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  teacherName: "",
  age: "",
  category: "",
};

const options = ["Front-end", "Back-end", "Dev-ops", "Database"];

const AddTeacher = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryMsgErr, setCategoryMsgErr] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { teacherName, age, category } = formValue;
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setEditMode(true);
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  });
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const onCategoryChange = (e) => {
    setCategoryMsgErr(null);
    setFormValue({ ...formValue, category: e.target.value });
  };
  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 text-center fw-bold">
        {editMode ? "Update Blog" : "Add blog"}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={teacherName || ""}
          name="teacherName"
          type="text"
          onChange={onInputChange}
          required
          label="Teacher Name"
          validation="Please provide a Teacher name"
        />
        <br />
        <MDBInput
          value={age || ""}
          name="age"
          type="text"
          onChange={onInputChange}
          required
          label="Age"
          validation="Please provide a age"
        />
        <br />
        <MDBInput
          value={grade || ""}
          name="grade"
          type="text"
          onChange={onInputChange}
          required
          label="Grade"
          validation="Please provide a grade"
        />
        <br />
        <select
          name=""
          id=""
          className="categoryDropdown"
          onChange={onCategoryChange}
          value={category}
        >
          <option value="">Please select category</option>
          {options.map((option, index) => (
            <option value={option || ""} key={index}>
              {option}
            </option>
          ))}
        </select>
        {categoryMsgErr && (
          <div className="categoryErrorMsg">{categoryMsgErr} </div>
        )}
        <br />
        <br />
        <MDBBtn type="submit" style={{ marginRight: "10px" }}>
          {editMode ? "Update " : "Add"}
        </MDBBtn>
        <MDBBtn
          color="danger"
          style={{ marginRight: "10px" }}
          onClick={() => navigate("/")}
        >
          Go back
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default AddTeacher;
