import React, { Component } from 'react';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { SearchForm, BookingForm, BookingList } from './components/Booking'
import { deleteBooking, addBooking } from './lib/bookingHelpers'
import { Container } from 'reactstrap'

const BOOKINGS = [
  { id: 1, topics: "Matematik, Svenska", school: "Junior High", status: "Unappointed"},
  { id: 2, topics: "Magic", school: "Hogwartz", status: "Appointed"}
]

class App extends Component {
  state = {
    bookings: BOOKINGS,
    searchValue: '',
    newBooking: '{"school": "Askim", "topics": "Matematik"}'
  }

  handleSearchInput = (evt) => {
    this.setState({
      searchValue: evt.target.value,
      bookings: this.searchBookings(evt.target.value)
    })
  }

  handleBookingChange = (evt) => {
    this.setState({ newBooking: evt.target.value })
  }

  handleDeleteBooking = (evt) => {
    evt.preventDefault()
    this.setState({
      bookings: deleteBooking(this.state.bookings, parseInt(evt.target.id, 10))
    })
  }

  handleNewBooking = (evt) => {
    const newBooking = {
      school: evt.target.elements.school.value,
      topics: evt.target.elements.topics.value }
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
          <header> <h2>Studentvikarie Bokningssystem</h2> </header>
          <hr/>
          <SearchForm
              handleSearchInput={this.handleSearchInput}
              searchValue={this.state.searchValue} />

          <BookingForm
              newBooking={this.state.newBooking}
              handleNewBooking={this.handleNewBooking}
              handleBookingChange={this.handleBookingChange} />

          <BookingList
            handleDeleteBooking={this.handleDeleteBooking}
            bookings={this.state.bookings} />
        </Container>
      </div>
    );
  }
}

export default App;
