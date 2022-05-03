import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import HomePage from './features/homepage/HomePage';

// This is all but a wrapper for homepage now
function App() {

    return (
        <div className="App">
            <HomePage/>
        </div>
    );
}

export default App;
