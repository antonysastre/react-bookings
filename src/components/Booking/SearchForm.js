import React from 'react'
import PropTypes from 'prop-types'

import { Form, Label, Input } from 'reactstrap'

export const SearchForm = (props) => (
  <section className="Booking-actions">
    <h3>Search Bookings</h3>
    <Form>
      <Label>Search</Label>
      <Input type="text" onChange={props.handleSearchInput} value={props.searchValue} />
    </Form>
  </section>
)

SearchForm.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
}
