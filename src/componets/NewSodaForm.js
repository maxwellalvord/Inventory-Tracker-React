import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewSodaForm(props){

  function handleNewSodaFormSubmission(event) {
    event.preventDefault();
    props.onNewSodaCreation({
      brand: event.target.brand.value, 
      flavor: event.target.flavor.value, 
      description: event.target.description.value, 
      id: v4(),
      quantity: 24
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewSodaFormSubmission} 
        buttonText="Add case of soda" />
    </React.Fragment>
  );
}

NewSodaForm.propTypes = {
  onNewSodaCreation: PropTypes.func,
};

export default NewSodaForm;