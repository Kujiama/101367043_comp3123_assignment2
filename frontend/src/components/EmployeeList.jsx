import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function EmployeeList({logout}) {
  const [employees, setEmployeeList] = useState([]);

  useEffect(() => {
    // fetch employees from the backend
    const fetchEmployees = async () => {
      try {
        const empResponse = await axios.get(
          "http://localhost:8484/api/v1/emp/employees"
        );
        const empData = await empResponse.data;
        setEmployeeList(empData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8484/api/v1/emp/remove/employee?eid=${id}`
      ); // delete employee from the backend
      const newEmployeeList = employees.filter((emp) => emp._id !== id); // filter out the deleted employee from the frontend
      setEmployeeList(newEmployeeList); // update the state of the new employee list
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Nav logout={logout}/>
      <h1>Assignment 2 - Crud Operations</h1>
      <div className="container">
        <div className="card">
          <div className="card-header d-flex flex-row-reverse">
            <Link to="/Employee/Add" className="btn btn-success w-25 m-3 p-2">
              Add New Employee
            </Link>
          </div>
          <div className="card-body">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => {
                  return (
                    <tr key={emp._id}>
                      <td>{emp.firstName}</td>
                      <td>{emp.lastName}</td>
                      <td>{emp.email}</td>
                      <td className="d-flex justify-content-around">
                        <Link
                          to={`/Employee/Update/${emp._id}`}
                          className="btn m-2 btn-success"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn m-2 btn-danger"
                          onClick={() => handleDelete(emp._id)}
                        >
                          Remove
                        </button>
                        <Link
                          to={`/Employee/Details/${emp._id}`}
                          className="btn m-2 btn-primary"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeList;
