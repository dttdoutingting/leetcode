import testMaxmumGap from '../../code/array/maximumGap_164'

test('maxmumGap: 1', () => {
  expect(testMaxmumGap([3, 6, 9, 1])).toEqual(3)
})

test('maxmumGap: 2', () => {
  expect(testMaxmumGap([3, 1])).toEqual(2)
})
