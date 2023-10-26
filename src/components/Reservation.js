import React, {useState} from 'react'

function Reservation() {
  const [ReservationData, setReservationData]=useState([{
    date:"",
    time:"",
    guests:"",
    occasion:"",
  }]);

  const handleChange= (e)=>{
    const {name, value} = e.target;
    setReservationData((prevState)=>({...prevState, [name]:value,}));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(ReservationData);
  };


  return (
    <div>
    <div className="ReservationFirstLine">
    <h1>Reservation</h1>
    <p>Please fill out the following form to make a reservation.</p>
    </div>
   <div className='formContainter'>
   <form onSubmit={handleSubmit}>
          <label for="res-date">Choose date</label>
          <input type="date" id="res-date" value={ReservationData.date} onChange={handleChange}/>
          <label for="res-time">Choose time</label>
          <select id="res-time " value={ReservationData.time} onChange={handleChange}>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
          </select>
          <label for="guests" >Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={ReservationData.guests} onChange={handleChange}/>
          <label for="occasion">Occasion</label>
          <select id="occasion" value={ReservationData.occasion} onChange={handleChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation"/>
    </form>
    </div>
    </div>
  )
}

export default Reservation;