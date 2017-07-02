import React from 'react'
import PropTypes from 'prop-types'

import { Input, Button } from 'reactstrap'
import { binder } from '../../lib/utils'

export const BookingItem = (props) => {
  const handleToggle = binder(props.handleToggleBooking, props.id)
  const handleDelete = binder(props.handleDeleteBooking, props.id)
  return (
    <tr>
      <td> {props.id} </td>
      <td> {props.school} </td>
      <td> {props.topics} </td>
      <td> <Input type="checkbox" checked={props.appointed} onChange={handleToggle}/> </td>
      <td> <Button className="btn-link" id={props.id} onClick={handleDelete}>Delete</Button> </td>
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
