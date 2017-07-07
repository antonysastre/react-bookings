import React from 'react'

import { Link } from '../Router'

export const BookingFilter = (props) => (
  <div className="filter">
    <Link to="/all">All</Link>
    <Link to="/appointed">Appointed</Link>
    <Link to="/unappointed">Unappointed</Link>
  </div>
)
