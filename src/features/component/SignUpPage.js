import React from 'react'
import {Form,Button} from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Navbar';

function SignUpPage() {
  return (
    <div>
          <NavBar/>
    <div className='loginpage'>
        
    <h1>Sign Up</h1>
        <Form style={{width:"30%"}}>
            <Form.Group  controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="User Name" />
                
            </Form.Group>
            <br></br>
            <Form.Group  controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <br></br>
            <Form.Group  controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
                Signup
            </Button>
        </Form>

    </div>
    </div>
  )
}

export default SignUpPage