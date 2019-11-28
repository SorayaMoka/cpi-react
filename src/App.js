import React, { Component } from 'react';
import Button from './Button/Button';
import DropAll from './Drop/DropAll';
import DropPiles from './Drop/DropPiles';
import DropLastNumber from './Drop/DropLastNumber';
import Enter from './Enter/Enter';
import Swap from './Swap/Swap';
import './App.css';

class App extends Component {

  state = {
    piles: [0,0,0,0,0,0,0,0,0],
    width: window.innerWidth
  };

  addPile = (value) => {
    const pilesStack = this.state.piles;
    let activeEntry = pilesStack[0];
    activeEntry = activeEntry ? activeEntry.toString() + value.toString() : value.toString();
    this.setState({piles: [activeEntry,...pilesStack.slice(1)]});
    console.log("input chiffre :", activeEntry);
  };

  enterPile = () => {
    const pilesStack = this.state.piles;
    this.setState({piles: [0,...pilesStack]});
    console.log("rentre dans la pile.");
  };

  swapEntries = () => {
    const stackVals = this.state.piles;
    console.log("stackVals: ", stackVals);
    let tmp = stackVals[1];
    stackVals[1] = stackVals[0];
    stackVals[0] = tmp;
    this.setState({piles: [stackVals[0],...stackVals.slice(1)]});
  };

  addDecimal = () => {
    const pilesStack = this.state.piles;
    let activeEntry = pilesStack[0];
    activeEntry = activeEntry.toString();

    if (activeEntry.includes('.')) {
    }
    else {
      activeEntry = activeEntry +'.';
      this.setState({piles: [activeEntry,...pilesStack.slice(1)]});
    }
  };

  addition = () => {
    const pilesStack = this.state.piles;
    let activeEntry = parseFloat(pilesStack[1], 10) + parseFloat(pilesStack[0], 10);
    activeEntry = activeEntry.toString();
    this.setState({piles: [activeEntry,...pilesStack.slice(2)]});
  };

  subtraction = () => {
    const pilesStack = this.state.piles;
    let activeEntry = parseFloat(pilesStack[1], 10) - parseFloat(pilesStack[0], 10);
    activeEntry = activeEntry.toString();
    this.setState({piles: [activeEntry,...pilesStack.slice(2)]});
  };

  multiplication = () => {
    const pilesStack = this.state.piles;
    let activeEntry = parseFloat(pilesStack[1], 10) * parseFloat(pilesStack[0], 10);
    activeEntry = activeEntry.toString();
    this.setState({piles: [activeEntry,...pilesStack.slice(2)]});
  };

  division = () => {
    const pilesStack = this.state.piles;
    let activeEntry = parseFloat(pilesStack[1], 10)/parseFloat(pilesStack[0], 10);
    activeEntry = activeEntry.toString();
    this.setState({piles: [activeEntry,...pilesStack.slice(2)]});
  };

  dropLastNumber = () => {
    const pilesStack = this.state.piles;
    let activeEntry = pilesStack[0];
    activeEntry = activeEntry ? activeEntry.toString().slice(0,-1) : activeEntry;
    activeEntry = activeEntry ? activeEntry : 0;
    this.setState({piles: [activeEntry,...pilesStack.slice(1)]});
  };

  dropPiles = () => {
    const pilesStack = this.state.piles;
    let activeEntry = pilesStack[0];
    activeEntry = 0;
    this.setState({piles: [activeEntry,...pilesStack.slice(1)]});
  };

  dropAll = () => {
    this.setState({piles: [0,0,0,0]});
  };

  render() {

    let operations = (
      <div>
        <div className="row">
          <div className="col-2"><Button symbol='+' click={() => this.addition()}/></div>
          <div className="col-2"><Button symbol='–' click={() => this.subtraction()}/></div>
          <div className="col-2"><Button symbol='×' click={() => this.multiplication()}/></div>
          <div className="col-2"><Button symbol='÷' click={() => this.division()}/></div>
          <div className="col-2"><DropLastNumber click={() => this.dropLastNumber()}/></div>
          <div className="col-2"><Enter click={() => this.enterPile()}/></div>
        </div>
      </div>
    );
    let buttons = (
      <div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2"><Button symbol='7' click={() => this.addPile(7)}/></div>
          <div className="col"></div>
          <div className="col-2"><Button symbol='8' click={() => this.addPile(8)}/></div>
          <div className="col"></div>
          <div className="col-2"><Button symbol='9' click={() => this.addPile(9)}/></div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2"><Button symbol='4' click={() => this.addPile(4)}/></div>
          <div className="col"></div>
          <div className="col-2"><Button symbol='5' click={() => this.addPile(5)}/></div>
          <div className="col"></div>
          <div className="col-2"><Button symbol='6' click={() => this.addPile(6)}/></div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2"><Button symbol='1' click={() => this.addPile(1)}/></div>
          <div className="col"></div>
          <div className="col-2"><Button symbol='2' click={() => this.addPile(2)}/></div>
          <div className="col"></div>
          <div className="col-2"><Button symbol='3' click={() => this.addPile(3)}/></div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3"><Button symbol='0' click={() => this.addPile(0)}/></div>
          <div className="col-5"><Button symbol='.' click={() => this.addDecimal()}/></div>
          <div className="col-5"></div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2"><DropPiles symbol='C' click={() => this.dropPiles()}/></div>
          <div className="col-1"></div>
          <div className="col-2"><DropAll symbol='AC' click={() => this.dropAll()}/></div>
          <div className="col-1"></div>
          <div className="col-2"><Swap symbol='SWAP' click={() => this.swapEntries()}/></div>
        </div>
      </div>
    );
    return (
      <div className="App">
        <div className="jumbotron panel-input">
          <h3 className="Project-title">Calculatrice Polonaise Inversée</h3>
          <h4>Projet Ecv Digital 2020 - Soraya M.</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col"/>
            <div className="col-xl-6 col-lg-8 col-md-10 col-12">
              <div className="piles">
                <h2 className="input">{this.state.piles[3]}</h2>
                <h2 className="input">{this.state.piles[2]}</h2>
                <h2 className="input">{this.state.piles[1]}</h2>
              </div>
              <div className="jumbotron panel-input">
                <h1 className="input-active">{this.state.piles[0]}</h1>
                <div>{operations}</div>
                <div>{buttons}</div>
              </div>
              <div className="col"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
