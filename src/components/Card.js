import React from 'react'

function Card(props) {
    const {FoodPic,FoodTitle,FoodPrice,FoodExplanation} = props.FoodData;
    
  return (

    <div className="CardContainer">
        <img className="FoodPic" src={FoodPic} alt={FoodTitle}></img>
        
        <div className="CardFirstLine">
            <div><h3 className="FoodTitle">{FoodTitle}</h3></div>
            <div><h3 className="FoodPrice">$ {FoodPrice.toFixed(2)}</h3></div>
        </div>
        
        <p className="FoodExplanation"> {FoodExplanation}</p>
        
        <div className="CardBottomLine">
            <h3> Order Delivery </h3>
            <img src="images/delivery.png" alt="motorcycle"></img>

        </div>

    </div>
  );
}

export default Card;