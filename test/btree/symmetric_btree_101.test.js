import Tree from '../../code/btree/symmetric_btree_101'

test('test Tree1', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3])
  expect(Tree.isSymmetric(root)).toBe(true)
})
test('test Tree2', () => {
  let root = new Tree([1, 2, 2, null, 3, null, 3])
  expect(Tree.isSymmetric(root)).toBe(false)
})
