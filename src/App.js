import React, {useState, createContext, useReducer} from 'react'
import './App.css';
import Home from "./components/Home";
import Nav from  './components/Nav';
import About from "./components/About";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const AvailableTimeContext = createContext();
const reducer = (state,action)=>{
  switch (action.Type){
    case "UPDATE_TIMES":
    return(state);
    default :
    return("please input the date");

  }
}

function App() {

  

 const initializeTimes = ()=>{return["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]};

  const [availableTime, dispatch] = useReducer(reducer, initializeTimes);

  const updateTimes  = (date)=>{dispatch({type:"UPDATE_TIMES",date})};


  return (
    <AvailableTimeContext.Provider value={updateTimes}>

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
</AvailableTimeContext.Provider>



  );
}

export {AvailableTimeContext};
export default App;
