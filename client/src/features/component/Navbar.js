import React  from 'react'
import {Navbar, Container, Nav} from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useSelector, useDispatch} from "react-redux";
import {setLogout} from '../authentication/userSlice'

function NavBar() {
  const {user} = useSelector((state)=>({...state.user}))
  const dispatch = useDispatch();
  function handleOnclick(){
    dispatch(setLogout())
  }
  return (
    <div>  
        <Navbar bg="dark" variant="dark" >
            <Container>
              <Navbar.Brand href="/">Bubble T</Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {user?.result?._id?(
                <>
                <Nav.Link href="/" >Welcome! {user?.result?.username}</Nav.Link>
                <Nav.Link href="/createshoppage">Create Post</Nav.Link>
                <Nav.Link href="/dashboard">My Post</Nav.Link>
                <Nav.Link href="/" onClick={()=>handleOnclick()}>Logout</Nav.Link>
                </>
              ):(
                <>
                <Nav.Link href="/loginpage">Login</Nav.Link>
                <Nav.Link href="/signuppage">Signup</Nav.Link>
                </> 
              )}
              </Nav>
            </Container>
        </Navbar>
  </div>
  )
}


export default NavBar