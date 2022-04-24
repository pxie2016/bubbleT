import React from 'react';
import Axios from 'axios';
import {Button,Navbar, Container, Nav, NavDropdown} from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './features/component/Navbar';
import HomePage from './features/component/HomePage';
function App() {
    /* Axios.post("http://localhost:8000/shops/add",{
        name: "Timeless T.",
        address: "14320 NE 20th St Unit D",
        city: "Bellevue",
        state: "WA",
        zipcode: "98007",
        stars: 4.6
    }).then(res => {
        console.log(res);
    }) */

    // TODO: This somehow needs to be extracted outside...?

    async function getAllShops() {
        const url = "http://localhost:8000/shops";
        let response = await Axios.get(url);
        return response.data;
    }

    console.log(getAllShops().then(result => {
        return result;
    }));

    return (
        <div className="App">

            <HomePage/>
        </div>
    );
}

export default App;
