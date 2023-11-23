import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  title: "",
  description: "",
  category: "",
};

const options = ["Salad", "Pizza", "Burger", "Desert"];

const Addrecipe = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryMsgErr, setCategoryMsgErr] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { title, description, category } = formValue;

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setEditMode(true);
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

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth()).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;
    return today;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      setCategoryMsgErr("Please select a category!");
    }
    if (title && description && category) {
      const currentDate = getDate();
      if (!editMode) {
        const updatedRecipeData = { ...formValue, date: currentDate };
        const response = await axios.post(
          "http://localhost:5000/recipes",
          updatedRecipeData
        );
        if (response.status === 201) {
          toast.success("Recipe created successful");
        } else {
          toast.error("Something went wrong");
        }
      } else {
        const response = await axios.put(
          `http://localhost:5000/recipes/${id}`,
          formValue
        );
        if (response.status === 200) {
          toast.success("Recipe updated successfuly");
        } else {
          toast.error("Something went wrong");
        }
      }
      setFormValue({ title: "", description: "", category: "" });
      navigate("/");
    }
  };
  return (
    <>
      <MDBValidation
        className="row g-3"
        style={{ marginTop: "100px" }}
        noValidate
        onSubmit={handleSubmit}
      >
        <p className="fs-2 fw-bold">{editMode ? "Update Blog" : "Add blog"}</p>
        <div
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
        >
          <MDBInput
            value={title || ""}
            name="title"
            type="text"
            onChange={onInputChange}
            required
            label="Title"
            validation="Please provide a title"
            invalid
          />
          <br />
          <MDBInput
            value={description || ""}
            name="description"
            type="textarea"
            onChange={onInputChange}
            required
            label="Description"
            validation="Please provide a description"
            textarea
            rows="4"
            invalid
          />

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
    </>
  );
};

export default Addrecipe;
