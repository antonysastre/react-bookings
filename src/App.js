import React, { Component } from 'react';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { SearchForm, BookingForm, BookingList } from './components/Booking'
import { deleteBooking, addBooking } from './lib/bookingHelpers'

const BOOKINGS = [
  { id: 1, topics: "Matematik, Svenska", school: "Junior High", status: "Unappointed"},
  { id: 2, topics: "Magic", school: "Hogwartz", status: "Appointed"}
]

class App extends Component {
  constructor() {
    super()
    this.state = { bookings: BOOKINGS, searchValue: '' }
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleNewBooking = this.handleNewBooking.bind(this)
    this.handleBookingChange = this.handleBookingChange.bind(this)
    this.handleDeleteBooking = this.handleDeleteBooking.bind(this)

    this.newBooking = '{"school": "Askim", "topics": "Matematik"}'
  }

  handleSearchInput(evt) {
    this.setState({
      searchValue: evt.target.value,
      bookings: this.searchBookings(evt.target.value)
    })
  }

  handleBookingChange(evt) {
    this.newBooking = evt.target.value
  }

  handleDeleteBooking(evt) {
    evt.preventDefault()
    this.setState({
      bookings: deleteBooking(this.state.bookings, parseInt(evt.target.id, 10))
    })
  }

  handleNewBooking(evt) {
    evt.preventDefault()
    this.setState({
      bookings: addBooking(this.state.bookings, JSON.parse(this.newBooking))
    })
  }

  searchBookings(searchString) {
    if (searchString === "") { return BOOKINGS; }

    let searchPattern = new RegExp(searchString, "i");
    return this.state.bookings.filter( b => ( b.school.match(searchPattern) ))
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Studentvikarie Bokningssystem</h2>
        </header>

        <SearchForm
            handleSearchInput={this.handleSearchInput}
            searchValue={this.state.searchValue} />

        <BookingForm
            newBooking={this.newBooking}
            handleNewBooking={this.handleNewBooking}
            handleBookingChange={this.handleBookingChange} />

        <BookingList
          handleDeleteBooking={this.handleDeleteBooking}
          bookings={this.state.bookings} />

      </div>
    );
  }
}

export default App;
