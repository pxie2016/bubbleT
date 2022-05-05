import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useDispatch} from "react-redux";
import NavBar from './features/component/Navbar'
import HomePage from './features/homepage/HomePage';
import {setUser} from './features/authentication/userSlice'
import LoginPage from './features/authentication/LoginPage';
import SignUpPage from './features/authentication/SignUpPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShopPage from './features/shoppage/ShopPage';
import CreateShopPage from './features/createshoppage/CreateShopPage';
import {IndividualShopPage} from "./features/shoppage/IndividualShopPage";
import DashBoard from './features/homepage/DashBoard';
function App() {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"))
    useEffect(() => {
        dispatch(setUser(user))
    })
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>

                    <Route path={"/shoppage"} element={<ShopPage/>}>
                        <Route path={":id"} element={<IndividualShopPage/>}/>
                    </Route>
                    <Route path={"/createshoppage"} element={<CreateShopPage/>}/>
                    <Route path={"/signuppage"} element={<SignUpPage/>}/>
                    <Route path={"/loginpage"} element={<LoginPage/>}/>
                    <Route path={"/dashboard"} element={<DashBoard/>}/>

                </Routes>


            </div>
        </BrowserRouter>
    );
}

export default App;
