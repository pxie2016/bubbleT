import React,{useState, useEffect} from 'react'

import {Form,Button} from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useSelector, useDispatch} from "react-redux";
import {login} from "./userSlice"
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
    const initialState = {
        email:'',
        password:''
    }

    const [formValue, setFormValue] = useState(initialState)

    const{email, password} = formValue
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const{error} = useSelector((state)=>({...state.user}))

    useEffect(()=>{
        error&&toast.error(error)
    },[error])

    function handleSubmit(e){
        e.preventDefault();
        console.log(formValue)
        if(email&&password){
            dispatch(login({formValue, navigate,toast}))
        }
    }
    function handleInputEmail(e){
        
        setFormValue({...formValue,['email']:e.target.value})
    }
    function handleInputPassword(e){
        
        setFormValue({...formValue,['password']:e.target.value})
    }
  return (
      <div>
    <div className='loginpage'>
        
    <h1>Log In</h1>
        <Form style={{width:"30%"}}>
            <Form.Group  controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="user@email.com" onChange={e => handleInputEmail(e)}/>
                
            </Form.Group>
            <br></br>
            <Form.Group  controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => handleInputPassword(e)}/>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" onClick={e=>handleSubmit(e)} >
                Login
            </Button>
            <ToastContainer/>
        </Form>
        

    </div>
    </div>
  )
}

export default LoginPage