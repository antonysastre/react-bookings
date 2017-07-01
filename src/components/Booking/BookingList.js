import React from 'react'
import PropTypes from 'prop-types'

import { Table } from 'reactstrap'
import { BookingItem } from './BookingItem'

export const BookingList = (props) => (
  <section className="Booking-list">
    <h3>Bookings</h3>
    <Table>
      { props.bookings.map(b => <BookingItem
        handleDeleteBooking={props.handleDeleteBooking}
        key={b.id} {...b} /> ) }
    </Table>
  </section>
)

BookingList.propTypes = {
  bookings: PropTypes.array.isRequired
}
