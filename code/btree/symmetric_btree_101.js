class TreeNode {
  constructor (data) {
    this.val = data
    this.left = this.right = null
  }
}

class Tree {
  constructor (data) {
    // 暂存所有的树节点，方便寻找父节点
    let nodeList = []
    let root

    for (let i = 0, len = data.length; i < len; i++) {
      let node = new TreeNode(data[i])
      nodeList.push(node)

      if (i > 0) {
        // 计算当前所在层
        let n = Math.floor(Math.sqrt(i + 1))
        // 当前层的起始位置
        let q = Math.pow(2, n) - 1
        // 计算上一层的起始位置
        let p = Math.pow(2, (n - 1)) - 1
        // 计算父节点的位置
        let parent = nodeList[Math.floor((i - q) / 2) + p]

        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }

    root = nodeList.shift()
    nodeList.length = 0
    return root
  }

  // 递归方法
  static isSymmetric (root) {
    if (!root) return true
    let walk = (left, right) => {
      if (!left && !right) {
        return true
      }
      if ((!left && right) || (left && !right) || (left.val !== right.val)) {
        return false
      }

      return walk(left.left, right.right) && walk(left.right, right.left)
    }

    return walk(root.left, root.right)
  }
}

export default Tree

export { TreeNode }
