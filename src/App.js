import React from 'react'
import './App.css';
import Home from "./components/Home";
import Nav from  './components/Nav';
import About from "./components/About";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    
    <nav>
     <Nav/>
    </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path="/order-online" element={<OrderOnline/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>

    </BrowserRouter>




    /*<div className="App">

     <Nav/>
     <Header/>
     <Main/>
     <Footer/>
    </div>*/
  );
}

export default App;
