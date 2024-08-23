import React, { useEffect, useState } from "react";
// import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import AddStudent from "./AddStudent";
import axios from "axios";
import { toast } from "react-toastify";
import StudentCard from "./Student/StudentCard";
import AdminNav from "./AdminNav";
import "./Admin.css";
import { MDBTypography, MDBInput } from "mdb-react-ui-kit";
const Admin = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadStudentData();
  }, []);

  const loadStudentData = async () => {
    const response = await axios.get("http://localhost:5000/students");
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error("Something went wrong");
    }
  };
  console.log("data:", data);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const response = await axios.delete(
        `http://localhost:5000/students/${id}`
      );
      if (response.status === 200) {
        toast.success("Student deleted successfuly");
        loadStudentData();
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);

    setFilteredData(filtered);
  };
  console.log();
  const filtered = data.filter((item) =>
    item.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const studentList = filtered.map((item, index) => (
    <li key={index}>
      <StudentCard key={index} handleDelete={handleDelete} {...item} />
    </li>
  ));
  return (
    <div>
      <h1>This is admin page </h1>
      <AdminNav />

      <div className="container">
        <div className="col">
          <h2>Teacher's list</h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="col p-2">
          <h2>Student's list</h2>
          <MDBInput
            type="search"
            placeholder="Search for Student name"
            onChange={handleSearch}
            value={searchTerm}
          />

          <ul className="student-list">
            {data.length === 0 && (
              <MDBTypography>no student found</MDBTypography>
            )}

            {studentList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
