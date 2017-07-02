import React from 'react'
import PropTypes from 'prop-types'

import { Input } from 'reactstrap'
import { binder } from '../../lib/utils'

export const BookingItem = (props) => {
  const handleToggle = binder(props.handleToggleBooking, props.id)
  return (
    <tr>
      <td> {props.id} </td>
      <td> {props.school} </td>
      <td> {props.topics} </td>
      <td> <Input type="checkbox" checked={props.appointed} onChange={handleToggle}/> </td>
      <td> <a href="" id={props.id} onClick={props.handleDeleteBooking}>Delete</a> </td>
    </tr>
  )
}

BookingItem.propTypes = {
  school: PropTypes.string.isRequired,
  topics: PropTypes.string.isRequired,
  appointed: PropTypes.bool.isRequired,
  handleDeleteBooking: PropTypes.func.isRequired,
  handleToggleBooking: PropTypes.func.isRequired
}
