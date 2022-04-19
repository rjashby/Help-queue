import React from 'react';
// s
import Debug from './Debug';
import FifteenMinutes from './FifteenMinutes';
import PairHelp from './PairHelp';

class QuestionControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stepsFirst: 0
    };
  }

  handleClick = () => {
    this.setState(prev => ({ stepsFirst: prev.count + 1}));
  };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.stepsFirst === 0) {
      currentlyVisibleState = <Debug />
      buttonText = "Yes"; // new code
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
        </React.Fragment>
      );
    } else if (this.state.stepsFirst === 1){
      currentlyVisibleState = <PairHelp />
      buttonText = "Yes"; // new code
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
        </React.Fragment>
      );
    } else {
      currentlyVisibleState = <FifteenMinutes />
      buttonText = "Yes"; // new code
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
        </React.Fragment>
      );
    };   
  }

}

export default QuestionControl;