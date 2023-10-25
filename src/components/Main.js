import React from 'react'
import Card from "./Card";

function Main() {
  const FoodData = {
    Salad:{FoodPic:"images/GreekSalad.png", FoodTitle: "Greek Salad", FoodPrice:12.99, FoodExplanation:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    Snack:{FoodPic:"images/Bruchetta.png", FoodTitle: "Bruchetta", FoodPrice:5.99, FoodExplanation:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    Dessert:{FoodPic:"images/LemonCake.png", FoodTitle: "Lemon Dessert", FoodPrice:5.00, FoodExplanation:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
  }
  return (
    <div className="Main">

        <div className="MainFirstLine">
            <h1>This Week's Specials!</h1>
            <button>Order Online</button>
        </div>
        

        <div className="foodContainer">
          <Card FoodData={FoodData.Salad}/>
          <Card FoodData={FoodData.Snack}/>
          <Card FoodData={FoodData.Dessert}/>
        </div>



    </div>
  )
}

export default Main;