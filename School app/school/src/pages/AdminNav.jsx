import React from "react";
import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/addstudent">add new student</Link>
        </li>
        <li>
          <Link to="/">add new teacher</Link>
        </li>
        <li>
          <Link to="#">add new course</Link>
        </li>
      </ul>
    </>
  );
};

export default AdminNav;
