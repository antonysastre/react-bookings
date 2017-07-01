import React from 'react'
import PropTypes from 'prop-types'

import { Label, Button, Form, FormGroup, Input } from 'reactstrap'

export const BookingForm = (props) => (
  <section className="Booking-form">
    <Form onSubmit={props.handleNewBooking}>
      <FormGroup>
        <Label htmlFor="booking">Booking</Label>
        <Input type="textarea" name="booking"
          onChange={props.handleBookingChange}
          defaultValue={props.newBooking} />
      </FormGroup>
      <Button>Create Booking</Button>
    </Form>
  </section>
)

BookingForm.propTypes = {
  handleNewBooking: PropTypes.func.isRequired,
  handleBookingChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
}
