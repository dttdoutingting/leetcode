import testPermute from '../../code/array/permute_46'

// test('permute:12', () => {
//   expect(testPermute([1, 2])).toEqual([ [1, 2], [2, 1] ])
// })
test('permute:123', () => {
  expect(testPermute([1, 2, 3])).toEqual([ [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1] ])
})
