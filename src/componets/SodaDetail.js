import React from "react";
import PropTypes from "prop-types";

function SodaDetail(props){
  const { soda } = props;

  return (
    <React.Fragment>
      <h1>Soda Details</h1>
      <h3>{soda.flavor} - {soda.brand}</h3>
      <p><em>{soda.quantity}</em></p>
      { soda.quantity > 0 ? <button onClick= {props.removeCan}>Sell Can</button> : null}
    </React.Fragment>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object,
  removeCan: PropTypes.func,

};

export default SodaDetail;