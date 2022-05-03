import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import HomePage from './features/homepage/HomePage';
import LoginPage from './features/component/LoginPage';
import SignUpPage from './features/component/SignUpPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EntryPage from './features/component/EntryPage';
import CreateEntryPage from './features/component/CreateEntryPage';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<App/>}/>
              
              {/* <Route path={"/homepage"} element={<HomePage/>}/> */}
              <Route path={"/entrypage"} element={<EntryPage/>}/>
              <Route path={"/createentrypage"} element={<CreateEntryPage/>}/>
              <Route path={"/signuppage"} element={<SignUpPage/>}/>
              <Route path={"/loginpage"} element={<LoginPage/>}/>

          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
