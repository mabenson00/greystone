import React, { Component } from 'react'
const defaultState = {
  rent: null,
  unit: null,
  vacant: null,
  bedrooms: null,
  bathrooms: null
};
class AptForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = defaultState
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetState = this.resetState.bind(this)
    this.doneAdding = this.doneAdding.bind(this)
    this.continueAdding = this.continueAdding.bind(this)

  }
  resetState() {
    this.setState(...this.defaultState)
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
     [name]: value
    });
  }

  continueAdding(event) {
    event.preventDefault()
    this.handleSubmit()
  }
  handleSubmit(event) {
    this.props.addApartment(this.state)
  }

  doneAdding(event) {
    event.preventDefault()
    this.props.handlePageChange()
  }


  render() {
    return (
      <div>
      <h4> Enter the information for each unit </h4>
      <label>
        Rent:
        <input
          name='rent'
          type='text'
          value={this.state.rent}
          onChange={this.handleInputChange}
          className='rent'/>
        </label>
        <label>
        Unit:
          <input
            name='unit'
            type='text'
            value={this.state.unit}
            onChange={this.handleInputChange}
            className='unit'/>
        </label>
        <label>
        Vacant:
          <input
            name='vacant'
            type='text'
            value={this.state.vacant}
            onChange={this.handleInputChange}
            className='vacant'/>
        </label>
        <label>
        Bedrooms:
          <input
            name='bedrooms'
            type='number'
            value={this.state.bedrooms}
            onChange={this.handleInputChange}
            className='bedrooms'/>
        </label>
        <label>
        Bathroom:
          <input
            name='bathrooms'
            type='number'
            value={this.state.bathroom}
            onChange={this.handleInputChange}
            className='bathroom'/>
        </label>
        <button onClick={this.continueAdding}> Add Another Apartment</button>
        <button onClick={this.doneAdding}> Done Adding Apartments </button>
        </div>
    )
  }
}



export default AptForm
