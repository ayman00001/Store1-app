import './App.css';
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/navbar";
import Product from './components/products';


class App extends Component {
  render() {
    return(
      <>
      <Navbar />
      <Product />
      </>
    )
  }
}



export default App;
