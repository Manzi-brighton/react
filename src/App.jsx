import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';

function App() {
    return (
        <>
          <BrowserRouter>
            <nav>
                <Link to="/">Home</Link><br/><br/><br/>
                <Link to="/About">About</Link><br/><br/><br/>
                <Link to="/Login">Login</Link><br/><br/><br/>


            </nav>
          
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="*" element={<h1>page not found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;