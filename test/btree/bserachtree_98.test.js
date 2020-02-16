import Tree from '../../code/btree/bserachtree_98'

test('isValidBST-01', () => {
  let root = new Tree([5, 1, 4, null, null, 3, 6])
  expect(Tree.isValidBST(root)).toBe(false)
})
test('isValidBST-02', () => {
  let root = new Tree([2, 1, 3])
  expect(Tree.isValidBST(root)).toBe(true)
})
test('isValidBST-03', () => {
  let root = new Tree([1, 1])
  expect(Tree.isValidBST(root)).toBe(false)
})
test('isValidBST-04', () => {
  let root = new Tree([10, 5, 15, null, null, 6, 20])
  expect(Tree.isValidBST(root)).toBe(false)
})
