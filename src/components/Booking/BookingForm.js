import React from 'react'
import PropTypes from 'prop-types'

import { Label, Button, Form, FormGroup, Input } from 'reactstrap'

export const BookingForm = (props) => (
  <section className="Booking-form">
    <h3>New booking</h3>
    <Form onSubmit={props.handleNewBooking}>

      <FormGroup>
        <Label htmlFor="school">School</Label>
        <Input type="string" name="school" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="topics">Topics</Label>
        <Input type="string" name="topics" />
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
