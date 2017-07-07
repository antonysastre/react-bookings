const baseUrl = 'http://localhost:8080/bookings'

export const getBookings = () => ( fetch(baseUrl).then( res => res.json() ) )

export const createBooking = (booking) => (
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(booking)
  }).then( res => res.json() )
)

export const removeBooking = (booking) => (
  fetch(`${baseUrl}/${booking.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(booking)
  }).then( res => res.json() )
)

export const saveBooking = (booking) => (
  fetch(`${baseUrl}/${booking.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(booking)
  }).then( res => res.json() )
)
