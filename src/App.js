import React, { Component } from 'react';

// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap'

import './App.css';
import { SearchForm, BookingList } from './components/Booking'
import { Link } from './components/Router'
import { findById, updateBooking, toggleBooking, deleteBooking, addBooking } from './lib/bookingHelpers'
import { piper, binder } from './lib/utils'


const BOOKINGS = [
  { id: 1, topics: "Matematik, Svenska", school: "Junior High", appointed: false },
  { id: 2, topics: "Magic", school: "Hogwartz", appointed: true }
]

class App extends Component {
  state = {
    bookings: BOOKINGS,
    searchValue: '',
    newBooking: ''
  }

  handleSearchInput = (evt) => {
    this.setState({
      searchValue: evt.target.value,
      bookings: this.searchBookings(evt.target.value)
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

  searchBookings(searchString) {
    if (searchString === "") { return BOOKINGS; }
    let searchPattern = new RegExp(searchString, "i");
    return this.state.bookings.filter( b => ( b.school.match(searchPattern) ))
  }

  render() {
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
            bookings={this.state.bookings}
            newBooking={this.state.newBooking}
            handleNewBooking={this.handleNewBooking}
            handleToggleBooking={this.handleToggleBooking}
            handleBookingChange={this.handleBookingChange} />

            <div class="footer">
              <Link to="/all">All</Link>
              <Link to="/appointed">Appointed</Link>
              <Link to="/unappointed">Unappointed</Link>
            </div>
        </Container>

      </div>
    );
  }
}

export default App;
