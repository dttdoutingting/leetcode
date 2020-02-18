import testSpiralOrder from '../../code/matrix/spiralOrder_54'

test('tesSpiralOrder:1', () => {
  expect(testSpiralOrder([[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]])).toEqual([1,2,3,6,9,8,7,4,5])
})
test('tesSpiralOrder:2', () => {
    expect(testSpiralOrder([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]])).toEqual([1,2,3,4,5,6,7,8,9,10])
  })