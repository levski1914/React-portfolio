import React from "react";
import { MDBBtn, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const StudentCard = ({
  id,
  studentName,
  grade,
  age,
  category,
  handleDelete,
}) => {
  return (
    <>
      <div className="card mt-5 pb-5">
        <div className="cardImage w-100 h-100">
          <MDBIcon fas icon="user" style={{ color: "#dd4b39" }} size="lg" />
        </div>
        <div className="cardBody">
          <h2>{studentName}</h2>
          <h3>{age}</h3>
          <h3>{grade}</h3>
          <h3>{category}</h3>
        </div>

        <div className="editOptions">
          <MDBBtn>
            <Link to={`/editstudent/${id}`}>
              <MDBIcon
                fas
                icon="edit"
                style={{ color: "#55acee", marginLeft: "10px" }}
              />
            </Link>
          </MDBBtn>
          <MDBBtn onClick={() => handleDelete(id)}>
            <MDBIcon fas icon="trash" style={{ color: "#dd5b39" }} />
          </MDBBtn>
        </div>
      </div>
    </>
  );
};

export default StudentCard;
