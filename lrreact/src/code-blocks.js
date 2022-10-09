/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

let choice = 2;
let funcChoice = function(){};


if(choice === 1){
  function App() {
    return (
      <div className="App">
      <h1>Is React LR Friendly?</h1>
      <h2>It just might be very friendly</h2>
      </div>
    );
  };
  funcChoice = App;
}
else
{  
  function App2() {
    return (
      <div className="App">
        <h1>This is a new component</h1>
        <h2>Well, is it?</h2>
      </div>
    );
  }
  funcChoice = App2;
}


//***********************************************************************************************************************************************************




import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}


