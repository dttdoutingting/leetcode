class TreeNode {
  constructor (data) {
    this.val = data
    this.left = null
  }
}

class Tree {
  constructor (data) {
    // 暂存所有的树节点，方便寻找父节点
    let nodeList = []
    let root

    for (let i = 0, len = data.length; i < len; i++) {
      let node = ''
      // 父节点
      if (!data[i].parentId) {
        node = new TreeNode(data[i].id)
      } else {
        // 如果是子节点，
        node = new TreeNode(data[i].parentId)
        let node2 = new TreeNode(data[i].id)
        node.left = node2
      }
      nodeList.push(node)
    }
    root = nodeList.shift()
    nodeList.length = 0
    return root
  }
}
export default Tree

export { TreeNode }
