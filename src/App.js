
import React, { Component } from 'react'
import logo from './logo.svg'
import LoanForm  from './form'
import './App.css'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      street: null,
      city: null,
      st: null,
      county: null,
      zip: null,
      page: 1,
      apts: []

    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.addApartment = this.addApartment.bind(this)
  }

  componentDidMount () {
  }

  addApartment(apt) {
    this.setState({ apts: [...this.state.apts, apt] });

  }
  handlePageChange(event) {
    event && event.preventDefault()
    this.setState({ page: this.state.page + 1 });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
     [name]: value
    });
  }

  render () {
    return (
      <div className='loan'>
        <form>
          <LoanForm
            handleInputChange = {this.handleInputChange}
            handlePageChange = {this.handlePageChange}
            addApartment = {this.addApartment}
            {...this.state}/>
        </form>
      </div>
    )
  }
}

export default App
