import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Recipes from "../components/Recipes";
import { MDBRow, MDBContainer, MDBCol, MDBTypography } from "mdb-react-ui-kit";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadRecipeData();
  }, []);
  const loadRecipeData = async () => {
    const response = await axios.get("http://localhost:5000/recipes");
    if (response.status === 200) {
      setData(response.data);
    } else {
      toast.error("Something went wrong!");
    }
  };
  console.log("data", data);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete that recipe?")) {
      const response = await axios.delete(
        `http://localhost:5000/recipes/${id}`
      );
      if (response.status === 200) {
        toast.success("Blog Deleted successfuly");
        loadRecipeData();
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + "...";
    }
    return str;
  };
  return (
    <>
      <MDBRow>
        {data.length === 0 && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No blog found
          </MDBTypography>
        )}
        <MDBCol>
          <MDBContainer>
            <MDBRow className="g-3">
              {data &&
                data.map((item, index) => (
                  <Recipes
                    key={index}
                    {...item}
                    excerpt={excerpt}
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

export default Home;
