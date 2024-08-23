import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import StudentCard from "./Student/StudentCard";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadStudentData();
  }, []);

  const loadStudentData = async () => {
    const response = await axios.get("http://localhost:5000/students");
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error("Something went wrong!");
    }
  };
  console.log("data:", data);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const response = await axios.delete(
        `http://localhost:5000/students/${id}`
      );
      if (response.status === 200) {
        toast.success("Student Deleted Successfuly");
        loadStudentData();
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
  return (
    <>
      <MDBRow style={{ width: "100%" }}>
        {data.lenght === 0 && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No blog found
          </MDBTypography>
        )}

        <MDBCol>
          <MDBContainer>
            <MDBRow style={{ width: "100%" }}>
              {data &&
                data.map((item, index) => (
                  <StudentCard
                    key={index}
                    {...item}
                    handleDelete={handleDelete}
                  />
                ))}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Homepage;
