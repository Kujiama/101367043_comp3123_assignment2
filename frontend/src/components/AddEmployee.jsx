import React, { Component } from 'react'
import { Container , Form, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value 
        })
    }

    onSubmit = async (e) => {

        try{
            e.preventDefault(); // prevent default action of the form which is to refresh the page

            // create an object to send to the backend
            const employeeObject = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            }

            // send the object to the backend
            await axios.post('http://localhost:8484/api/v1/emp/employees', employeeObject)
                .then(res => console.log(res.data));

            // reset the state
            this.setState({
                firstName: '',
                lastName: '',
                email: ''
            })

            console.log(employeeObject);
        }catch(e){
            console.error(e);
        }
        
    }


    render() {
        return (
            <Container className='w-25 bg-info p-5'>
                <h1>Add Employee</h1>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required value={this.state.firstName} type="text" placeholder="Enter First Name" onChange={e=>this.onChangeFirstName(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required value={this.state.lastName} type="text" placeholder="Enter Last Name" onChange={e=>this.onChangeLastName(e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required value={this.state.email} type="email" placeholder="Enter Email" onChange={e=>this.onChangeEmail(e)}/>
                            </Form.Group>
                            <Link to="/" className='btn btn-success' type="submit" onClick={e=>this.onSubmit(e)}>
                                Submit
                            </Link>
                            <Link to="/" className="btn btn-danger">
                                Cancel
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
    
        )
    }
}

export default AddEmployee