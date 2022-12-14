import React from 'react';
import '../App.css';
import Header from './Header';
import SodaControl from './SodaControl'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SodaControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;

