import React from 'react';
import {React, useState } from 'react'
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Debug from './Debug';
import FifteenMinutes from './FifteenMinutes';
import PairHelp from './PairHelp';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      stepsFirst: 0,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  firstClicks = () => {
      this.setState(prev => ({ stepsFirst: prev.count + 1}));
    };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.stepsFirst = 0) {
      currentlyVisibleState = <Debug />
      buttonText = "Yes", // new code
    } else if (this.state.stepsFirst = 1){
      currentlyVisibleState = <PairHelp />
      buttonText = "Yes", // new code
    } else if (this.state.stepsFirst = 2){
      currentlyVisibleState = <FifteenMinutes />
      buttonText = "Yes", // new code
    } else {      
      if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewTicketForm />;
        buttonText = "Return to Ticket List"; // new code
      } else {
        currentlyVisibleState = <TicketList />;
        buttonText = "Add Ticket"; // new code
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.firstClicks}>{buttonText}</button>
          <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
        </React.Fragment>
      );
    }
  }
}

export default TicketControl;