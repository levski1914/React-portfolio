import React, { useEffect, useState } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  studentName: "",
  grade: "",
  category: "",
  age: "",
};
const options = ["Front-end", "Back-end", "Dev-ops", "Database"];
const AddStudent = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryMsgErr, setCategoryMsgErr] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { studentName, grade, age, category } = formValue;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      getSingleStudent(id);
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id]);
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onCategoryChange = (e) => {
    setCategoryMsgErr(null);
    setFormValue({ ...formValue, category: e.target.value });
  };
  const getSingleStudent = async (id) => {
    const singleStudent = await axios.get(
      `http://localhost:5000/students/${id}`
    );
    if (singleStudent.status === 200) {
      setFormValue({ ...singleStudent.data });
    } else {
      toast.error("Something went wrong!");
    }
  };

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      setCategoryMsgErr("please select a category");
    }
    if (studentName && grade && age && category) {
      const currentDate = getDate();
      if (!editMode) {
        const updatedStudent = { ...formValue, date: currentDate };
        const response = await axios.post(
          "http://localhost:5000/students",
          updatedStudent
        );
        if (response.status === 201) {
          toast.success("Student added successfuly");
        } else {
          toast.error("Something went wrong!");
        }
      } else {
        const response = await axios.put(
          `http://localhost:5000/students/${id}`,
          formValue
        );
        if (response.status === 200) {
          toast.success("Student updated successfuly");
        } else {
          toast.error("Something went wrong");
        }
      }
      setFormValue({ studentName: "", grade: "", age: "", category: "" });
      navigate("/Admin");
    }
  };

  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 text-center fw-bold">
        {editMode ? "Update Blog" : "Add Student"}
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
          value={studentName || ""}
          name="studentName"
          type="text"
          onChange={onInputChange}
          required
          label="Student Name"
          validation="Please provide a student name"
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
          onClick={() => navigate("/Admin")}
        >
          Go back
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default AddStudent;
