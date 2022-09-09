import React from 'react';
import Soda from "./Soda";
import PropTypes from 'prop-types';

function SodaList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.sodaList.map((soda) =>
        <Soda
          whenSodaClicked = { props.onSodaSelection }
          brand={soda.brand}
          flavor={soda.flavor}
          quantity={soda.quantity}
          id={soda.id}
          key={soda.id}/>
      )}
    </React.Fragment>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.array,
  onSodaSelection: PropTypes.func
};

export default SodaList;