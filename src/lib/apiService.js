const baseUrl = 'http://localhost:8080/bookings'
const headers = (path, booking) => ({
    method: path,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(booking)}
)

const response = (res) => (res.json())

export const getBookings    = () =>
  fetch(baseUrl).then( response )

export const createBooking  = booking =>
  fetch(baseUrl, headers('POST', booking)).then( response )

export const removeBooking  = booking =>
  fetch(`${baseUrl}/${booking.id}`, headers('DELETE', booking)).then( response )

export const saveBooking    = booking =>
  fetch(`${baseUrl}/${booking.id}`, headers('PUT', booking)).then( response )
