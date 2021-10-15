import React, { useState, useEffect } from 'react'
import HomePage from './Components/HomePage';
import { Route, Link } from 'react-router-dom';
import PizzaForm from './Components/PizzaForm';
import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';



const initialFormValues = {
  // TEXT
  name: '',
  instructions: '',

  // DROPDOWN
  size: '',

  ///// RADIO BUTTONS /////
  sauce: '',
  
  ///// CHECKBOXES /////
  pepperoni: false,
  sausage: false,
  onions: false,
  greenPepper: false,
}

const initialFormErrors = {
  name: '',
  instructions: '',
  size: '',
  sauce: '',
  
}

const initialOrders = [];


const App = () => {

  const [orders, setOrders] = useState(initialOrders)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  
  const inputChange = (name, value) => {

    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }



  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      onions: formValues.onions,
      greenPepper: formValues.greenPepper,
      special: formValues.instructions.trim(),
  
      
    }
 
    console.log(newOrder);
    postNewOrder(newOrder);
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
  }


  const postNewOrder = newOrder => {

    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([res.data, ...orders]);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }









  return (
    <>
    <div>
        <div className="header">
        <h1>Lambda Eats</h1>
        <nav>

          <Link to="/">Home </Link>
          <Link to="/users"> Contact</Link>
          <Link to="/post"> About us</Link>
 
        </nav>

        </div>


        <Route exact path="/">
        <HomePage/>
        </Route>

        <Route exact path="/pizza">
        <PizzaForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        // disabled={disabled}
        errors={formErrors}
        />
        </Route>
    </div>
      

      
    </>
  );
};
export default App;


