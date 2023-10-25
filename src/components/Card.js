import React from 'react'

function Card(props) {
    const {FoodPic,FoodTitle,FoodPrice,FoodExplanation} = props.FoodData;
    
  return (

    <div className="CardContainer">
        <img className="FoodPic" src={FoodPic} alt={FoodTitle}></img>
        <h3 className="FoodTitle">{FoodTitle}</h3>
        <h3 className="FoodPrice">$ {FoodPrice}</h3>
        <p className="FoodExplanation"> {FoodExplanation}</p>
        <h3>Order Delivery</h3>

    </div>
  );
}

export default Card;