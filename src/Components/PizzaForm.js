import React from "react";
import { Route, Link } from "react-router-dom";


const PizzaForm = (props) => {

    const {
        values,
        change,
        errors,
        submit,
        // disabled,
      } = props

      const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }
      
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
  
    return (

        <div className="pizzaForm">
            
        <h1>Build Your Own Pizza!</h1>

        <img className="byoP" src="https://images.unsplash.com/photo-1542866789-bb9c9d086a5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80" alt="pizza"></img> 
        
        <form id="pizza-form" onSubmit={onSubmit}>

        {/* onSubmit={onSubmit} */}

        <h2>Customize Your Pizza</h2>

        {/* initial disable */}
       

        <div>
          <div id="nameError">{errors.name}</div>
        </div>
    


        <div className="sizeSelector">
        <h3>Choose Size</h3>
        <label>Size
          <select id="size-dropdown" onChange={onChange} value={values.size} name='size'>
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
 
        <label>Original Red
          <input
            type="radio"
            name="sauce"
            value="Original Red"
            onChange={onChange}
            checked={values.sauce === "Original Red"}
          />
        </label>

        <label>Garlic Parmesan
          <input
            type="radio"
            name="sauce"
            value="Garlic Parmesan"
            onChange={onChange}
            checked={values.sauce === "Garlic Parmesan"}
          />
        </label>


        <label>BBQ Sauce
          <input
            type="radio"
            name="sauce"
            value="BBQ Sauce"
            onChange={onChange}
            checked={values.sauce === "BBQ Sauce"}
          />
        </label>

        <label>Spinach Alfredo
          <input
            type="radio"
            name="sauce"
            value="Spinach Alfredo"
            onChange={onChange}
            checked={values.sauce === "Spinach Alfredo"}
          />
        </label>
        </div>


        <div className="toppingSelector">
        <h3>Choose Toppings (Up to 10)</h3> 
        <label>Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            onChange={onChange}
            checked={values.pepperoni}
          />
        </label>

        <label>Sausage
          <input
            type="checkbox"
            name="sausage"
            onChange={onChange}
            checked={values.sausage}
          />
        </label>

        
        <label>Onions
          <input
            type="checkbox"
            name="onions"
            onChange={onChange}
            checked={values.onions}
          />
        </label>

        <label>Green Pepper
          <input
            type="checkbox"
            name="greenPepper"
            onChange={onChange}
            checked={values.greenPepper}
          />
        </label>

        
       
        </div>





        <div className="textSection">
     
        <label>Special Instructions&nbsp;
          <input
            value={values.instructions}
            onChange={onChange}
            name='instructions'
            type='text'
            id="special-text"
            placeholder="Anything else?"
          />
        </label>

        <label>Name:&nbsp;
          <input
            value={values.name}
            onChange={onChange}
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