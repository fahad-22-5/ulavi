import './App.css';
import { useState } from 'react';
import {getDatabase} from 'firebase/database';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import InfoPage from './infoPage';
import List from './list';
import NavigationBar from './navigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path="/" Component={List}/>
          <Route path="universal" Component={InfoPage}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
