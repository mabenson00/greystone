import React, { Component } from 'react'
import AptForm  from './aptform'
var STATES = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
  'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
  'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]

class LoanForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = { }

  }

  MakeItem = function(X) {
                return <option key={X} >{X}</option>;
  };




  pageOne() {

    return (
      <div>
      <h4> Find the loan for your building </h4>
      <label>
        Address:
        <input
          name='street'
          type='text'
          value={this.props.street}
          onChange={this.props.handleInputChange}
          className='address'/>
        </label>
        <label>
        City:
          <input
            name='city'
            type='text'
            value={this.props.city}
            onChange={this.props.handleInputChange}
            className='city'/>
        </label>
        <label>
        State:
          <select
            label='Multiple Select'
            onChange={this.props.handleInputChange}
            name='st'
            value={this.props.st}>
            {STATES.map(this.MakeItem)}
          </select>
        </label>
        <label>
        County:
          <input
            name='county'
            type='text'
            value={this.props.county}
            onChange={this.props.handleInputChange}
            className='county'/>
        </label>
        <label>
        Zip:
          <input
            name='zip'
            type='text'
            value={this.props.zip}
            onChange={this.props.handleInputChange}
            className='zip'/>
        </label>
        <button onClick={this.props.handlePageChange}> Next </button>
        </div>
    )
  }

  pageTwo() {
    return (
      <div>
      <AptForm
        handlePageChange={this.props.handlePageChange}
        addApartment = {this.props.addApartment}
        />

      </div>

    )
  }


  render() {
    console.log(this.state)
    return (
      <div>
      { this.props.page == 1 && this.pageOne()}
      { this.props.page == 2 && this.pageTwo()}
      </div>
    )
  }
}

export default LoanForm
