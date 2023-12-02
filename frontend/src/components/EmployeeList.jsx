import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeList() {
    
    const {employees, setEmployeeList} = useState([]);

    useEffect(() => {

        // fetch employees from the backend
        const fetchEmployees = async () => {
            try{
                const empResponse = axios.get('http://localhost:8484/api/v1/emp/employees');
                const empData = await empResponse;
                console.log(empData.data);
            }catch(e){
                console.error(e);
            }
        }

        fetchEmployees();
    }, []);

    const handleAddEmployee = () => {
        alert('Add Employee');
    }
    
    const handleEditEmployee = () => {
        alert('Add Employee');
    }
    
    const handleRemoveEmployee = () =>{
        alert(`Remove Employee`);
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header d-flex flex-row-reverse">
                    <button className="btn btn-success w-25 m-3 p-2">Add</button>
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
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>sample@email.com</td>
                                <td className='d-flex justify-content-around'>
                                    <button className="btn btn-primary">Update</button>
                                    <button className="btn btn-danger">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );   
}

export default EmployeeList;