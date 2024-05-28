
import FoodItems from "./component/FoodItems";
import Error from "./component/Error";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Container from "./component/Container";
import Foodinput from "./component/Foodinput";
import { useState } from "react";

function App() {
 let [fooditems,setFoodItems]=useState([])
  const onKeyDown=(event)=>{
    if(event.key==='Enter'){
      let newFoodItem=event.target.value;
      event.target.value="";
      let newitems=[...fooditems,newFoodItem];
      setFoodItems(newitems);
      
    }
  };
  return (
  <Container>
  <h1 className="food">Healthy Food</h1>
  <Error items={fooditems}/>
  <Foodinput handleKeyDown={onKeyDown}/>
  <FoodItems items={fooditems}/>
 </Container>
  );

}

export default App
