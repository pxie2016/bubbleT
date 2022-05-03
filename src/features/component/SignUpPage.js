import React,{useState, useEffect} from 'react'
import {Form,Button} from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {signup} from "../user/userSlice"
function SignUpPage() {

    const initialState = {
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    const [formValue, setFormValue] = useState(initialState)

    const{username, email, password,confirmPassword} = formValue
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const{loading, error} = useSelector((state)=>({...state.user}))

    useEffect(()=>{
        error&&toast.error(error)
    },[error])

    function handleSubmit(e){
        e.preventDefault();
        console.log(formValue)
        if(password!== confirmPassword){
            return toast.error("two password should match")
        }
        if(email&&password&&username&&confirmPassword){
            dispatch(signup({formValue, navigate,toast}))
        }
    }
    function handleUserName(e){
        setFormValue({...formValue,['username']:e.target.value})
    }
    function handleEmail(e){
        setFormValue({...formValue,['email']:e.target.value})
    }
    function handlePassword(e){
        setFormValue({...formValue,['password']:e.target.value})
    }

    function handleConfirmPassword(e){
        setFormValue({...formValue,['confirmPassword']:e.target.value})
    }
    
  return (
    <div>
    <div className='loginpage'>
        
    <h1>Sign Up</h1>
        <Form style={{width:"30%"}}>
            <Form.Group  controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="User Name" onChange={e => handleUserName(e)}/>
                
            </Form.Group>
            <br></br>
            <Form.Group  controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="user@email.com" onChange={e => handleEmail(e)}/>
            </Form.Group>
            <br></br>
            <Form.Group  controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => handlePassword(e)}/>
            </Form.Group>
            <br></br>
            <Form.Group  controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => handleConfirmPassword(e)}/>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" onClick={e=>handleSubmit(e)}>
                Signup
            </Button>
            <ToastContainer/>
        </Form>

    </div>
    </div>
  )
}

export default SignUpPage