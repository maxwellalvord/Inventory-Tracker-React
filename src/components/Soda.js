import React from "react";
import PropTypes from "prop-types";

function Soda(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSodaClicked(props.id)}>
        <h3>{props.flavor} - {props.brand}</h3>
        <p><em>Cans remaining: {props.quantity}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Soda.propTypes = {
  brand: PropTypes.string,
  flavor: PropTypes.string,
  id: PropTypes.string,
  quantity: PropTypes.number,
  whenSodaClicked: PropTypes.func
};

export default Soda;