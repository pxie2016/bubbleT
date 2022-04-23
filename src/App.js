import React from 'react';
import Axios from 'axios';
import './App.css';

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
            <h1>bubbleT, a bubble tea review site</h1>
            <div>
            </div>
        </div>
    );
}

export default App;
