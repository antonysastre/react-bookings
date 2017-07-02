import React from 'react'
import PropTypes from 'prop-types'

import { Button, Input } from 'reactstrap'

export const BookingForm = (props) => (
  <tr>
    <td>  </td>
    <td> <Input type="string" name="school" placeholder="School" /> </td>
    <td> <Input type="string" name="topics" placeholder="Topics" /> </td>
    <td> <Input type="checkbox" name="appointed" />{' '} </td>
    <td> <Button className="btn-link">Create</Button> </td>
  </tr>
)

BookingForm.propTypes = {
  handleNewBooking: PropTypes.func.isRequired,
  handleBookingChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
}
