import React, { useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useDispatch} from "react-redux";
import NavBar from './features/component/Navbar'
import HomePage from './features/homepage/HomePage';
import {setUser} from './features/user/userSlice'
import LoginPage from './features/component/LoginPage';
import SignUpPage from './features/component/SignUpPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EntryPage from './features/entrypage/EntryPage';
import CreateEntryPage from './features/component/CreateEntryPage';

function App() {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"))
    useEffect(()=>{
        dispatch(setUser(user))
    },[])
    return (
        <BrowserRouter>
        <div className="App">
        <NavBar/>
          <Routes>
              <Route path={"/"} element={<HomePage/>}/>
              
              <Route path={"/entrypage"} element={<EntryPage/>}/>
              <Route path={"/createentrypage"} element={<CreateEntryPage/>}/>
              <Route path={"/signuppage"} element={<SignUpPage/>}/>
              <Route path={"/loginpage"} element={<LoginPage/>}/>

          </Routes>
  
  
        </div>
        </BrowserRouter>
    );
}

export default App;
