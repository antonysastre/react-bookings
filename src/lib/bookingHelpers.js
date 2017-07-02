export const findById = (id, bookingList) => ( bookingList.find( (booking) => (booking.id === id) ))

export const addBooking = (list, booking) => {
  if (!booking.id) { booking.id =  Math.floor(Math.random()*100000) }
  return list.concat(booking)
}

export const updateBooking = (list, booking) => {
  const index = list.findIndex((item) => ( item.id === booking.id ))
  return [
      ...list.slice(0, index),
      booking,
      ...list.slice(index+1)
  ]
}

export const deleteBooking = (bookingList, id) => ( bookingList.filter((booking) => ( booking.id !== id)))
export const toggleBooking = (booking) => ({...booking, appointed: !booking.appointed})
