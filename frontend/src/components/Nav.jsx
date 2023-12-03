import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

const Nav = ({logout}) => {


  const handleLogout = () => {
    logout(false);
  }


  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Assignment 2 - Crud Operations with react</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/" className="btn btn-danger" onClick={handleLogout}>
            Logout
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
