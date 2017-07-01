import React from 'react'
import PropTypes from 'prop-types'

import { BookingItem } from './BookingItem'

export const BookingList = (props) => (
  <section className="Booking-list">
    { props.bookings.map(b => <BookingItem
      handleDeleteBooking={props.handleDeleteBooking}
      key={b.id} {...b} /> ) }
  </section>
)

BookingList.propTypes = {
  bookings: PropTypes.array.isRequired
}
