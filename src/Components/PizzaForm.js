import React from "react";
import { Route, Link } from "react-router-dom";


const PizzaForm = (props) => {
  
    return (

        <div className="pizzaForm">
            
        <h1>Build Your Own Pizza!</h1>

        <img className="byoP" src="https://images.unsplash.com/photo-1542866789-bb9c9d086a5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80" alt="pizza"></img> 
        
        <form id="pizza-form">

        {/* onSubmit={onSubmit} */}

        <h2>Customize Your Pizza</h2>

        {/* initial disable */}
       

        {/* <div >
          <div id="fNameError">{errors.first_name}</div>
          <div id="lNameError">{errors.last_name}</div>
          <div id="emailError">{errors.email}</div>
          <div id="passError">{errors.password}</div>
          <div id="tosError">{errors.agreed}</div>
        </div>
      </div> */}


        <div className="sizeSelector">
        <h3>Choose Size</h3>
        {/* value={values.role} name="role" onChange={onChange} */}
        <label>Size
          <select id="size-dropdown">
              <option value="">-- Choose --</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X Large">X Large</option>
          </select>
        </label>
        </div>


        <div className="sauceSelector">
        <h3>Choose Sauce</h3>
        {/* value={values.role} name="role" onChange={onChange} */}
        <label>Original Red
          <input
            type="radio"
            name="sauce"
            value="Original Red"
            // onChange={onChange}
            // checked={values.civil === "single"}
          />
        </label>

        <label>Garlic Parmesan
          <input
            type="radio"
            name="sauce"
            value="Garlic Parmesan"
            // onChange={onChange}
            // checked={values.civil === "married"}
          />
        </label>


        <label>BBQ Sauce
          <input
            type="radio"
            name="sauce"
            value="BBQ Sauce"
            // onChange={onChange}
            // checked={values.civil === "married"}
          />
        </label>

        <label>Spinach Alfredo
          <input
            type="radio"
            name="sauce"
            value="Spinach Alfredo"
            // onChange={onChange}
            // checked={values.civil === "married"}
          />
        </label>
        </div>


        <div className="toppingSelector">
        <h3>Choose Toppings (Up to 10)</h3> 
        <label>Pepperoni
          <input
            type="checkbox"
            name="Pepperoni"
            // onChange={onChange}
            // checked={values.hiking}
          />
        </label>

        <label>Sausage
          <input
            type="checkbox"
            name="Sausage"
            // onChange={onChange}
            // checked={values.hiking}
          />
        </label>

        <label>Canadian Bacon
          <input
            type="checkbox"
            name="Canadian Bacon"
            // onChange={onChange}
            // checked={values.hiking}
          />
        </label>

        <label>Italian Bacon
          <input
            type="checkbox"
            name="Italian Bacon"
            // onChange={onChange}
            // checked={values.hiking}
          />
        </label>

        <label>Grilled Chicken
          <input
            type="checkbox"
            name="Grilled Chicken"
            // onChange={onChange}
            // checked={values.hiking}
          />
        </label>
        
        <label>Onions
          <input
            type="checkbox"
            name="Onions"
            // onChange={onChange}
            // checked={values.hiking}
          />
        </label>

        <label>Green Pepper
          <input
            type="checkbox"
            name="Green Pepper"
            // onChange={onChange}
            // checked={values.hiking}
          />
        </label>

        <label>Roasted Red Pepper
          <input
            type="checkbox"
            name="Roasted Red Peppers"
            // onChange={onChange}
            // checked={values.hiking}
          />
        </label>

        <label>Diced Tomato
          <input
            type="checkbox"
            name="Diced Tomato"
            // onChange={onChange}
            // checked={values.hiking}
          />
        </label>

        <label>Roasted Garlic
          <input
            type="checkbox"
            name="Roasted Garlic"
            // onChange={onChange}
            // checked={values.hiking}
          />
        </label>
        

       
       
        </div>





        <div class="textSection">
     
        <label>Special Instructions&nbsp;
          <input
            // value={values.first_name}
            // onChange={onChange}
            name='instructions'
            type='text'
            id="special-text"
            placeholder="Anything else?"
          />
        </label>

        <label>Name:&nbsp;
          <input
            // value={values.first_name}
            // onChange={onChange}
            name='name'
            type='text'
            id="name-input"
          />
        </label>

        </div>

        



       


        

        <button id='order-button'>Order Now</button>

    </form>
        



    </div>
    )  
       
       
}


export default PizzaForm;