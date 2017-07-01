import { addBooking, deleteBooking } from './bookingHelpers'

test('addBooking should add the passed booking to the list', () => {
    const startBookings = [
      { school: "Hogwartz", topics: "Matematik, Spanska", appointed: false },
      { school: "21 Jump Street", topics: "Spanska", appointed: false }
    ]

    const newBooking = { id: 1, school: "Hogwartz", topics: "Magic", appointed: true }

    const expected = [
      { school: "Hogwartz", topics: "Matematik, Spanska", appointed: false },
      { school: "21 Jump Street", topics: "Spanska", appointed: false },
      { id: 1, school: "Hogwartz", topics: "Magic", appointed: true }
    ]

    const result = addBooking(startBookings, newBooking)

    expect(result).toEqual(expected)
})

test('addBooking should not mutate the original list', () => {
    const startBookings = [
      { school: "Hogwartz", topics: "Matematik, Spanska", appointed: false },
    ]

    const newBooking = { school: "Hogwartz", topics: "Magic", appointed: true }

    const expected = [
      { school: "Hogwartz", topics: "Matematik, Spanska", appointed: false },
      { school: "Hogwartz", topics: "Magic", appointed: true }
    ]

    const result = addBooking(startBookings, newBooking)

    expect(startBookings).not.toEqual(expected)
})

test('addBooking generates a random ID if not provided', () => {
    const startBookings = [ ]
    const newBooking = { school: "Hogwartz", topics: "Magic", appointed: true }
    const result = addBooking(startBookings, newBooking)
    expect(result[0].id).toBeGreaterThan(0)
    expect(result[0].id).not.toBeUndefined()
})

test('deleteBooking removes the passed in booking id from the list', () => {
    const startBookings = [ { id: 1 }, { id: 2 } ]
    const expected = [ { id: 1 } ]
    const result = deleteBooking(startBookings, 2)
    expect(result).toEqual(expected)
})
