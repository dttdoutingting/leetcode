import Heap from '../../code/heap/frequencySort_451'

test('Heap: 1', () => {
  let heap = new Heap('chaac')
  expect(heap.toString()).toMatch(/ccaah|aacch/)
})

test('Heap: 2', () => {
  let heap = new Heap('tree')
  expect(heap.toString()).toMatch(/eert|eetr/)
})
