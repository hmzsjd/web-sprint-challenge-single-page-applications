import React from "react";
import { Route, Link } from "react-router-dom";
import Options from "./Options";

const Header = (props) => {
  
    return (

        <div className="homePage">
        
        <div className="mainImage">
        <h1>Your favorite food, delivered while coding.</h1>
        <button id="order-pizza">Pizza?</button>    
        </div>
        

        <div className="foodOptions">
        <h2> Delivery for Lambda Students </h2>
        <Options />
        </div>

        </div>
    )  
       
       
}


export default Header;