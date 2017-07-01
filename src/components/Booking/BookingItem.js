import React from 'react'
import PropTypes from 'prop-types'

export const BookingItem = (props) => (
  <article>
    {props.id} - <span className="booking-title">{props.school} <small>{props.topics}</small> </span>
    <a href="" id={props.id} className="delete" onClick={props.handleDeleteBooking}>x</a>
  </article>
)

BookingItem.propTypes = {
  school: PropTypes.string.isRequired,
  topics: PropTypes.string.isRequired,

  handleDeleteBooking: PropTypes.func.isRequired
}
