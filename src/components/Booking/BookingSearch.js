import React from 'react'
import PropTypes from 'prop-types'

import { Form, Label, Input } from 'reactstrap'

export const BookingSearch = (props) => (
  <section className="Booking-actions">
    <Form>
      <Label>Search</Label>
      <Input type="text" onChange={props.handleSearchInput} value={props.searchValue} />
    </Form>
  </section>
)

BookingSearch.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
}
