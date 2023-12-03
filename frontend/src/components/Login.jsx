import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({loggedIn}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMsg, setLoginMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try{

        const loginResponse = await axios.post('http://localhost:8484/api/v1/user/login',{ email, password });
        if(loginResponse.status){
          console.log('Login Success');
          loggedIn(true);
          setLoginMsg('Login Success');
        }else{
          console.log('Login Failed');
          loggedIn(false);
          setLoginMsg('Login Failed');
        }

    }catch(error){
      console.log(error);
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }


  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e=>handleEmailChange(e)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e=>handlePasswordChange(e)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Form.Text>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </Form.Text>
    </Form>
  );
}

export default Login;