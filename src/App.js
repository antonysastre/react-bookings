import React, { Component } from 'react';
import PropTypes from 'prop-types'

// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap'

import './App.css';
import { SearchForm, BookingList } from './components/Booking'
import { Link } from './components/Router'
import { findById,
  updateBooking,
  toggleBooking,
  deleteBooking,
  addBooking,
  searchBookings,
  filterBookings } from './lib/bookingHelpers'
import { piper, binder } from './lib/utils'


class App extends Component {
  state = {
    bookings: [],
    searchValue: '',
    newBooking: ''
  }

  handleSearchInput = (evt) => {
    this.setState({
      searchValue: evt.target.value,
    })
  }

  handleToggleBooking = (id) => {
    const getUpdatedBookings = piper(findById, toggleBooking, binder(updateBooking, this.state.bookings))
    const updatedBookings    = getUpdatedBookings(id, this.state.bookings)
    this.setState({ bookings: updatedBookings })
  }

  handleBookingChange = (evt) => {
    this.setState({ newBooking: evt.target.value })
  }

  handleDeleteBooking = (id) => {
    this.setState({ bookings: deleteBooking(this.state.bookings, id) })
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
  }


  render() {
    const searchedBookings = searchBookings(this.state.bookings, this.state.searchValue)
    const filteredBookings = filterBookings(searchedBookings, this.context.route)
    return (
      <div className="App">
        <Container>
          <header> <h2>Bokningssystem</h2> </header>
          <hr/>
          <SearchForm
              handleSearchInput={this.handleSearchInput}
              searchValue={this.state.searchValue} />

          <BookingList
            handleDeleteBooking={this.handleDeleteBooking}
            bookings={filteredBookings}
            newBooking={this.state.newBooking}
            handleNewBooking={this.handleNewBooking}
            handleToggleBooking={this.handleToggleBooking}
            handleBookingChange={this.handleBookingChange} />

            <div className="footer">
              <Link to="/all">All</Link>
              <Link to="/appointed">Appointed</Link>
              <Link to="/unappointed">Unappointed</Link>
            </div>
        </Container>

      </div>
    );
  }
}

App.contextTypes = {
  route: PropTypes.string
}

export default App;
