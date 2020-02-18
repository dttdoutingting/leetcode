import Ugly from '../../code/heap/nthSuperUglyNumber_313'

test('ugly: 1', () => {
  expect(Ugly.getPrimes(6)).toEqual([2, 3])
})
test('ugly: 2', () => {
  expect(Ugly.getPrimes(10)).toEqual([2, 5])
})
test('ugly: 3', () => {
  let ugly = new Ugly(12, [2, 7, 13, 19])
  expect(ugly.getAll()).toBe(32)
})
test('ugly: 4', () => {
  let ugly = new Ugly(800, [37, 43, 59, 61, 67, 71, 79, 83, 89, 97, 101, 103, 113, 127, 131, 157, 163, 167, 173, 179, 191, 193, 197, 199, 211, 229, 233, 239, 251, 257])
  expect(ugly.getAll()).toBe(32)
})
