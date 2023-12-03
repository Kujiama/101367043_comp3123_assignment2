import axios from "axios";
import { Link, useParams } from "react-router-dom"; // useParams is used to get the employee_id from the url
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";


const DetailsEmployee = () => {

    const { id } = useParams(); // get the employee_id from the url
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        
        // fetch employee from the backend
        const fetchEmployeeDetails = async () => {
            try{
                const empResponse = await axios.get(`http://localhost:8484/api/v1/emp/employees/${id}`);
                const empDetails = await empResponse.data;
                setEmployee(empDetails)
                
                console.log(empDetails);
            }catch(e){
                console.error(e);
            }
        }
        fetchEmployeeDetails();
    },[id]);

    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8484/api/v1/emp/remove/employee?eid=${id}`); // delete employee from the backend
        }catch(e){
            console.error(e);
        }
    }
    

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>First Name: {employee.firstName}</ListGroup.Item>
                <ListGroup.Item>Last Name: {employee.lastName}</ListGroup.Item>
                <ListGroup.Item>Email: {employee.email}</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-around">
                <Link className="btn btn-primary" to="/Employee/Update/:id" >Update</Link>
                <Link className="btn btn-danger" onClick={handleDelete(id)} to="/">Delete</Link>
            </Card.Body>
        </Card>
    );
}
 

export default DetailsEmployee;