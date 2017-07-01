export const addBooking = (list, booking) => {
  if (!booking.id) { booking.id =  Math.floor(Math.random()*100000) }
  return list.concat(booking)
}
export const deleteBooking = (list, id) => ( list.filter((item) => ( item.id !== id)))
