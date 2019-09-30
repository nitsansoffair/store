import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from "./components/Cart";
import Default from './components/Default';
import Modal from './components/Modal';

// TODO - Migrate text to separate file
// TODO - Migrate css to scss
// TODO - Add Info Page with: Google maps, contact details with links
// TODO - Add contact form

function App() {
  return (
      <React.Fragment>
          <Navbar/>
          <Switch>
              <Route exact path="/" component={ProductList}/>
              <Route path="/details" component={Details}/>
              <Route path="/cart" component={Cart}/>
              <Route component={Default}/>
          </Switch>
          <Modal/>
      </React.Fragment>
  );
}

export default App;
