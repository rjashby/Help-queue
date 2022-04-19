import React from 'react';
import Debug from './Debug';
import FifteenMinutes from './FifteenMinutes';
import PairHelp from './PairHelp';
import TicketControl from './TicketControl';
import Header from "./Header";

class QuestionControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stepsFirst: 0
    };
  }

  handleClick = () => {
    this.setState(prev => ({ stepsFirst: prev.stepsFirst + 1}));
  };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.stepsFirst <= 2){
      if (this.state.stepsFirst === 0) {
        currentlyVisibleState = <Debug />
        buttonText = "Yes"; 
        console.log(this.state.stepsFirst);
      } else if (this.state.stepsFirst === 1){
        currentlyVisibleState = <PairHelp />
        buttonText = "Yes"; 
        console.log(this.state.stepsFirst);
      } else if (this.state.stepsFirst === 2) {
        currentlyVisibleState = <FifteenMinutes />
        buttonText = "Yes"; 
        console.log(this.state.stepsFirst);
      };   
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    } else {
      return ( 
        <React.Fragment>
          <Header />
          <TicketControl />
        </React.Fragment>
      );
    }
  }
}

export default QuestionControl;