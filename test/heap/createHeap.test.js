import Heap from '../../code/heap/createHeap'

test('Heap: 1', () => {
  let heap = new Heap([1, 10, 9, 5, 3, 11])
  expect(heap.sort()).toEqual([1, 3, 5, 9, 10, 11])
})
