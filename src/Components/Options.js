import React from "react";
import { Route, Link } from "react-router-dom";

const Options = (props) => {
  
    return (

        <div className="choicesGallery">
            
            <div className="option">
                <img className="optionImg" src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80" alt="burger"></img>
                <h3>Bob's Burgers</h3>
                <p>$ - American - Fast Food</p>
                <p><span>20-30 mins</span> <span>$4.99 Delivery</span></p>
            </div>

            <div className="option">
                <img className="optionImg" src="https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80" alt="pasta"></img>
                <h3>Pete's Pasta</h3>
                <p>$$ - Italian - Restaurant</p>
                <p><span>30-35 mins</span> <span>$6.99 Delivery</span></p>
            </div>

            <div className="option">
                <img className="optionImg" src="https://images.unsplash.com/photo-1541921671-aef0a20d0787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1572&q=80" alt="burger"></img>
                <h3>Vegan Delights</h3>
                <p>$$$ - American - Fast Food</p>
                <p><span>40-45 mins</span> <span>$8.99 Delivery</span></p>
            </div>
        

        </div>
    )  
       
       
}


export default Options;