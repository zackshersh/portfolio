import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";

import App from './App';
import MainWorkPage from './Components/MainWorkPage';
import Title from './Components/Title';
import WorkPage from './Components/WorkPage';


ReactDOM.render( <HashRouter>
    <Routes>
        <Route exact path='/' element={<Title />}></Route>
        <Route path='/featured-work' element={<MainWorkPage />}></Route>
        <Route path='/all-work' element={<WorkPage />}></Route>
    </Routes>
</HashRouter>, document.getElementById('root'));

