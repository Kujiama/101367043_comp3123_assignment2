import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const UpdateEmployee = () => {
  const { id } = useParams(); // get the employee_id from the url
  const [employee, setEmployee] = useState({
    _id: id,
    firstName: "",
    lastName: "",
    email: "",
  });

  const [addMsg, setAddMsg] = useState(""); // for displaying the message after adding an employee

  useEffect(() => {
    // Fetch employee details when the component mounts
    const fetchEmployeeDetails = async () => {
      try {
        const empResponse = await axios.get(
          `http://localhost:8484/api/v1/emp/employees/${id}`
        );
        const empDetails = await empResponse.data;
        setEmployee(empDetails);
      } catch (e) {
        console.error(e);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  const onChangeFirstName = (e) => {
    setEmployee({
      ...employee, // spread operator for copying the previous values of the object
      firstName: e.target.value,
    });
  };

  const onChangeLastName = (e) => {
    setEmployee({
      ...employee,
      lastName: e.target.value,
    });
  };

  const onChangeEmail = (e) => {
    setEmployee({
      ...employee,
      email: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.put(
        `http://localhost:8484/api/v1/emp/employees/${employee._id}`,
        employee
      );
      // console.log(employee);
      setAddMsg("Employee Updated Successfully");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/" className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h1 className="m-5">Edit Employee</h1>
      </div>
      <Container className="w-25 bg-info p-5">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  value={employee.firstName}
                  type="text"
                  placeholder="Enter First Name"
                  onChange={(e) => onChangeFirstName(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  value={employee.lastName}
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={(e) => onChangeLastName(e)}
                />{" "}
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  value={employee.email}
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => onChangeEmail(e)}
                />
              </Form.Group>
              <Button className="btn btn-success" type="submit">
                Submit
              </Button>
              <Link to="/" className="btn btn-danger">
                Cancel
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center mt-5">
        <h3 className="text-success">{addMsg}</h3>
      </div>
    </>
  );
};

export default UpdateEmployee;
