import testIsUgly from '../../code/array/isUgly_263'

test('isUgly: 1', () => {
  expect(testIsUgly(8)).toBe(true)
})
test('isUgly: 2', () => {
  expect(testIsUgly(-8)).toBe(false)
})
test('isUgly: 3', () => {
  expect(testIsUgly(937351770)).toBe(false)
})

test('isUgly: 4', () => {
  expect(testIsUgly(6)).toBe(true)
})
