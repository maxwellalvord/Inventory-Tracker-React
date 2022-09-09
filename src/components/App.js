import React from 'react';
import '../App.css';
import Header from './Header';
import SodaControl from './SodaControl'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SodaControl />
    </React.Fragment>
  );
}

export default App;

