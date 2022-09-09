import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const reusableFormStyles = {
    width: '620px',
    border: '3px solid #dadada',
    borderRadius: '6px'
  }
  
  return (
    <React.Fragment>
      <form id="formStyle" onSubmit={props.formSubmissionHandler}>
        <div className="col my-2" align="center">
          <input style={reusableFormStyles}
            className="mx-3"
            type='text'
            name='brand'
            placeholder='Coca-Cola Company' />
        </div>
        <div className="col my-2" align="center">
          <input style={reusableFormStyles}
            className="mx-3"
            type='text'
            name='flavor'
            placeholder='Cherry vanilla' />
        </div>
        <div id="mainBtn" align="center">
          <button className="d-flex justify-content-center" type='submit'>{props.buttonText}</button>
        </div>
      </form>
    </React.Fragment>
  );
}

ReusableForm.prototype = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;