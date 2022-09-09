import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';
import SodaDetail from './SodaDetail';
// import EditSodaForm from './EditSodaForm';

class SodaControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSodaList: [],
      selectedSoda: null
    };
  }


  handleChangingSelectedSoda = (id) => {
    const selectedSoda = this.state.mainSodaList.filter(soda => soda.id === id)[0];
    this.setState({selectedSoda: selectedSoda});
  }

  handleClick = () => {
    if (this.state.selectedSoda != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSoda: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewSodaToList = (newSoda) => {
    const newMainSodaList = this.state.mainSodaList.concat(newSoda);
    this.setState({
      mainSodaList: newMainSodaList,
      formVisibleOnPage: false });
  }

  handleRemoveCan = () => {
    const selectedSoda = this.state.selectedSoda;
    const remove = Object.assign({}, selectedSoda, {quantity: selectedSoda.quantity - 1});
    const editMainSoda = this.state.mainSodaList
      .filter(soda => soda.id !== this.state.selectedSoda.id)
      .concat(remove);
    this.setState({
      mainSodaList: editMainSoda,
      selectedSoda: remove
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.selectedSoda != null) {
      currentlyVisibleState = <SodaDetail soda = {this.state.selectedSoda} removeCan = {this.handleRemoveCan}/>
      buttonText = "Return to Soda List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm onNewSodaCreation={this.handleAddingNewSodaToList}  />;
      buttonText = "Return to Soda List";
    } else {
      currentlyVisibleState = <SodaList sodaList={this.state.mainSodaList} onSodaSelection={this.handleChangingSelectedSoda} />;
      buttonText = "Add Soda";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default SodaControl;