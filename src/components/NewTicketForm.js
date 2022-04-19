import React from "react";
import { v4 } from 'uuid'; // new code

function NewTicketForm(props){
  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Request Help</button>
      </form>
    </React.Fragment>
  );
}

export default NewTicketForm;