import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let txt=this.props.txt
    return (
      <div className="App">
        <header className="App-header">
        <center> <h1>  React JS  </h1> </center>
        </header>

        <body  bgcolor="skyblue">
          <div >
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <h1>Simple text h1</h1>
         <h2>Simple text h1</h2>
         
         <h1>{txt}</h1>
         </div>

         <div >

           <h3> simple text h3 </h3>

           </div>
        </body>
        <footer> The footer of React JS </footer> 
      </div>
    );
  }
}

export default App;
