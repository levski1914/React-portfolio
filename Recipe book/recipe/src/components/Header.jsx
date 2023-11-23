import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <MDBNavbar expand="lg" light style={{ backgroundColor: "#e3f2fd" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={show} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <MDBNavbarLink aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/addRecipe">Add recipe</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/about">About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Header;
