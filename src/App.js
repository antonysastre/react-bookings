import React, { Component } from 'react';
import PropTypes from 'prop-types'

// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap'

import './App.css';
import { BookingSearch, BookingList, BookingFilter } from './components/Booking'
import { findById,
  updateBooking,
  toggleBooking,
  deleteBooking,
  addBooking,
  searchBookings,
  filterBookings
} from './lib/bookingHelpers'

import {
  getBookings,
  createBooking,
  removeBooking,
  saveBooking
} from './lib/apiService'

import { piper, binder } from './lib/utils'


class App extends Component {
  state = {
    bookings: [],
    searchValue: '',
    newBooking: '',
  }

  handleSearchInput = (evt) => {
    this.setState({
      searchValue: evt.target.value,
    })
  }

  componentDidMount() {
      getBookings().then(bookings => this.setState({bookings}))
  }

  handleToggleBooking = (id) => {
    const toggledBooking      = piper(findById, toggleBooking)
    const updatedBooking     = toggledBooking(id, this.state.bookings)
    const getUpdatedBookings = binder(updateBooking, this.state.bookings)
    const updatedBookings    = getUpdatedBookings(updatedBooking)
    this.setState({ bookings: updatedBookings })
    saveBooking(updatedBooking).then( this.displayMessage('Booking Updated') )
  }

  handleBookingChange = (evt) => {
    this.setState({ newBooking: evt.target.value })
  }

  handleDeleteBooking = (id) => {
    const booking = findById(id, this.state.bookings)
    removeBooking(booking).then( this.displayMessage('Booking Removed') )
    this.setState({ bookings: deleteBooking(this.state.bookings, booking.id) })
  }

  handleNewBooking = (evt) => {
    const newBooking = {
      school: evt.target.elements.school.value,
      topics: evt.target.elements.topics.value,
      appointed: evt.target.elements.appointed.checked,
    }
    evt.preventDefault()
    this.setState({
      bookings: addBooking(this.state.bookings, newBooking)
    })
    createBooking(newBooking).then( this.displayMessage('Booking Added') )
  }

  displayMessage(msg) {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2000)
  }

  render() {
    const searchedBookings = searchBookings(this.state.bookings, this.state.searchValue)
    const filteredBookings = filterBookings(searchedBookings, this.context.route)
    return (
      <div className="App">
        <Container>
          <header> <h2>Bokningssystem</h2> </header>
          <hr/>
          <BookingSearch
              handleSearchInput={this.handleSearchInput}
              searchValue={this.state.searchValue} />

          <BookingFilter />

          {this.state.message && <span className="flash-notice">{this.state.message}</span>}

          <BookingList
            handleDeleteBooking={this.handleDeleteBooking}
            bookings={filteredBookings}
            newBooking={this.state.newBooking}
            handleNewBooking={this.handleNewBooking}
            handleToggleBooking={this.handleToggleBooking}
            handleBookingChange={this.handleBookingChange} />
        </Container>

      </div>
    );
  }
}

App.contextTypes = {
  route: PropTypes.string
}

export default App;
