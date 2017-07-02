import { piper, binder } from './utils'

const add = (a, b) => a + b
const add3 = (a, b, c) => a + b + c

const dbl = (num) => num * 2
const inc = (num) => num + 1

test('binder returns a fn with binded args', () => {
  const inc = binder(add, 1)
  expect( inc(2) ).toEqual(3)
})

test('binder works with multiple args', () => {
  const inc = binder(add3, 1, 2)
  expect( inc(2) ).toEqual(5)
})

test('piper passes the results of add to dbl', () => {
  const pipeline = piper(add, dbl) // dbl(add(1, 2))
  const result   = pipeline(1, 2)
  expect(result).toBe(6)
})

test('piper passes the results of dbl to inc', () => {
  const pipeline = piper(dbl, inc) // dbl(add(1, 2))
  const result   = pipeline(2)
  expect(result).toBe(5)
})

test('piper works with more than two function', () => {
  const pipeline = piper(add, inc, dbl, inc) // dbl(add(1, 2))
  const result   = pipeline(1, 2)
  expect(result).toBe(9)
})
