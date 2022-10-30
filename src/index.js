import React from 'react';
import ReactDOM from 'react-dom/client';
// import './static/css/index.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Trend from "./Trend";
import Register from "./Register";
import My from "./My";
import New from "./New";
import All from "./All";
import Show from "./Show";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Main /> }/>
            <Route path='/login' element={ <Login /> }/>
            <Route path='/register' element={ <Register /> }/>
            <Route path='/trend' element={ <Trend /> }/>
            <Route path='/my' element={ <My /> }/>
            <Route path='/new' element={ <New /> }/>
            <Route path='/all' element={ <All /> }/>
            <Route path='/show' element={ <Show /> }/>
            {/*<Navigate path="*" to="/" />*/}
        </Routes>
    </BrowserRouter>
);

// https://stackoverflow.com/questions/41738421/how-react-js-index-js-file-contacting-index-html-for-id-references