import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Index from "./component";
import Header from "./component/header";
import Footer from "./component/footer";
import Barcode_generator from './component/barcode_example';
import Time_line from './component/time_line';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
            <Index/>
          <Footer/>
          { /*<Barcode_generator/> */ }
          {/* <Time_line/> */}
      </div>
    );
  }
}

export default App;
