import React from 'react'


function BookingForm(props) {

    const handleChange= (e)=>{

        const {name, value} = e.target;
        props.setReservationData((prevState)=>({...prevState, [name]:value,}));
      };
    
      const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(props.ReservationData);
      };

  



  return (
    <div>
    <div className="ReservationFirstLine">
    <h1>Reservation</h1>
    <p>Please fill out the following form to make a reservation.</p>
    </div>
   <div className='formContainter'>
   <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" name="date" value={props.ReservationData.date} onChange={handleChange}/>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time " name="time" value={props.ReservationData.time} onChange={handleChange}>
              {props.availableTime.map((time) => (<option>{time}</option>))}
          </select>
          <label htmlFor="guests" >Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={props.ReservationData.guests} onChange={handleChange}/>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" value={props.ReservationData.occasion} onChange={handleChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation"/>
    </form>
    </div>
    </div>
  )
}


export default BookingForm