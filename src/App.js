import logo from './logo.svg';
import React from 'react';
import './App.css';

function Header(props) {
  return (
    <div className="App">
    <h1>Greeting {props.text}</h1>
    </div>    
  );
}

class Odometer extends React.Component{
  constructor(){
    super();
    this.state = {
      counter: 0
    };
  }

  addons(value){
    if (this.state.counter+value <= 9999) {
      this.setState({
        counter: this.state.counter+value
      });
    }
    else{
      this.setState({
        counter: this.state.counter+value-10000
      });
    }
  }

  render(){
    return(
      <>
        <div className="App">
          <button onClick={()=> this.addons(1)}>ADD 1</button>
          <button onClick={()=> this.addons(10)}>ADD 10</button>
          <button onClick={()=> this.addons(100)}>ADD 100</button>
          <button onClick={()=> this.addons(1000)}>ADD 1000</button>
        </div>

        <div className="App">
          <h2>Your Odometer</h2>
          <h2>{String(this.state.counter).padStart(4, 0)}</h2>
        </div>
      </>
    )
  }
}

function Footer(props) {
  return (
    <div className="App">
    <h5>#feel_free_to_rest_here {props.trademark} </h5>
    </div>    
  );
}

function App() {
  return (
    <>
    <Header text="Traveler"/>
    <Odometer />
    <Footer trademark="@copyright reserved"/>
    </>
  );
}

export default App;
