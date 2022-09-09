import React from 'react';
import Soda from "./Soda";
import PropTypes from 'prop-types';

function SodaList(props){
  // const count = Object.keys(props).length();
  // if (count > 0){
  //   const hasSoda = true;
  //   return hasSoda;
  // }
  return (
    <React.Fragment>
      <hr/>
      <h4 id="Disclaimer" align="center">(DISCLAIMER: This party only allows you to bring 24 packs!)</h4>
        {/* {hasSoda ? ( */}
          <div id="sodaStyle">
            {props.sodaList.map((soda) =>
              <Soda
                whenSodaClicked = { props.onSodaSelection }
                brand={soda.brand}
                flavor={soda.flavor}
                quantity={soda.quantity}
                id={soda.id}
                key={soda.id}/>
            )}
          {/* : ()} */}
        </div>
    </React.Fragment>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.array,
  onSodaSelection: PropTypes.func
};

export default SodaList;