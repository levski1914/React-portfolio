import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
const Recipes = ({
  title,
  category,
  description,
  id,
  excerpt,
  handleDelete,
}) => {
  return (
    <>
      <MDBCol size="3">
        <MDBCard
          className="h-100 mt-5 border"
          style={{ maxWidth: "20rem", maxHeight: "320px" }}
        >
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
              {excerpt(description)}
              <Link to={`/recipe/${id}`} className="d-block text-center">
                Read more
              </Link>
            </MDBCardText>
            <span className="text-center">
              <MDBBtn className="mt-1" tag="a" onClick={() => handleDelete(id)}>
                <MDBIcon
                  fas
                  icon="trash"
                  style={{ color: "#dd4b39" }}
                  size="lg"
                />
              </MDBBtn>
              <Link to={`/editRecipe/${id}`}>
                <MDBIcon
                  fas
                  icon="edit"
                  style={{ color: "#55acee", marginLeft: "15px" }}
                  size="lg"
                />
              </Link>
            </span>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
};

export default Recipes;
