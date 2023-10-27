import React, {useState, useContext} from 'react'
import BookingForm from './BookingForm';
import {AvailableTimeContext} from "../App";


function Reservation() {

  const [ReservationData, setReservationData]=useState({
    date:"",
    time:"17:00",
    guests:"1",
    occasion:"Birthday",
  });

  const availableTime = useContext(AvailableTimeContext);




  return (
    <div>
    <BookingForm ReservationData={ReservationData} setReservationData={setReservationData} availableTime={availableTime}/>
    </div>
  )
}

export default Reservation;