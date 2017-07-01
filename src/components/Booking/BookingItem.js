import React from 'react'
import PropTypes from 'prop-types'

export const BookingItem = (props) => (
  <tr>
    <td>{props.id}</td>
    <td> {props.school} </td>
    <td> {props.topics} </td>
    <td> <a href="" id={props.id} className="delete" onClick={props.handleDeleteBooking}>Delete</a> </td>
  </tr>
)

BookingItem.propTypes = {
  school: PropTypes.string.isRequired,
  topics: PropTypes.string.isRequired,
  handleDeleteBooking: PropTypes.func.isRequired
}
