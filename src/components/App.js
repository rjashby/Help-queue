import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import QuestionControl from "./QuestionControl";

function App(){
  if (QuestionControl.stepsFirst < 3) {
    return (
    <React.Fragment>
      <QuestionControl />
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

export default App;