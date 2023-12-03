import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupMsg, setSignupMsg] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try{
      const signupResponse = await axios.post('http://localhost:8484/api/v1/user/signup',{ email, password });
      // console.log(signupResponse);
      if(signupResponse.status){
        setSignupMsg(`Signup Success. Please login with ${email} and your password`);
      }else{
        setSignupMsg('Signup Failed');
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
    <Form onSubmit={handleSignup}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter your email"  onChange={handleEmailChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Choose a password" onChange={handlePasswordChange}/>
      </Form.Group>

      <Form.Text>
        have an account? <Link to="/">Login</Link>
      </Form.Text>

      <Button variant="primary" className="m-2" type="submit">
        Sign Up
      </Button>



      {
        // If signupMsg is not empty, display it
        signupMsg?
          <p className="text-success">{signupMsg}</p>
          :
          <p className='text-danger'>{signupMsg}</p>
      }
    </Form>

   
  );
}

export default Signup;