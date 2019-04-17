import React, { Component } from 'react';
import Navbar from './Navbar';
import ChooseNews from './ChooseNews';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      country: "TW",
    }
  }

  handleNavClick = (e) => {
    e.preventDefault()
    this.setState({
      country: e.target.name,
    })
  }

  render() {
    return (
      <div className="App">   
          <Navbar country={this.state.country} handleNavClick={this.handleNavClick}/>        
          <ChooseNews country={this.state.country} />
          <footer className="fixed-bottom">
            This page is created by - elvis1056
          </footer>
      </div>
    );
  }
}

export default App;
