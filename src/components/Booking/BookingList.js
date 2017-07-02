import React from 'react'
import PropTypes from 'prop-types'

import { Form, Table } from 'reactstrap'
import { BookingItem } from './BookingItem'
import { BookingForm } from './BookingForm'

export const BookingList = (props) => (
  <section className="Booking-list">
    <Form inline onSubmit={props.handleNewBooking}>
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>School</th>
          <th>Topics</th>
          <th>Appointed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <BookingForm
            newBooking={props.newBooking}
            handleNewBooking={props.handleNewBooking}
            handleBookingChange={props.handleBookingChange} />

        { props.bookings.map(booking =>
            <BookingItem
              handleToggleBooking={props.handleToggleBooking}
              handleDeleteBooking={props.handleDeleteBooking}
              key={booking.id} {...booking} /> ) }
      </tbody>

    </Table>
    </Form>
  </section>
)

BookingList.propTypes = {
  bookings: PropTypes.array.isRequired
}
