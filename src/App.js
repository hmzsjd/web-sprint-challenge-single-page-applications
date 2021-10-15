import React from "react";
import HomePage from './Components/HomePage';
import { Route, Link } from 'react-router-dom';
import PizzaForm from './Components/PizzaForm';





const App = () => {
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
        <PizzaForm />
        </Route>
    </div>
      

      
    </>
  );
};
export default App;


