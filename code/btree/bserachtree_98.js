class TreeNode {
  constructor (data) {
    this.val = data
    this.left = this.right = null
  }
}

// 建立二叉搜索树
// class Tree {
//   constructor (data) {
//     let root = new TreeNode(data.shift())

//     data.forEach(item => {
//       this.insert(root, item)
//     })
//     return root
//   }
//   insert (node, data) {
//     if (data < node.val) {
//       if (!node.left) {
//         node.left = new TreeNode(data)
//       } else {
//         this.insert(node.left, data)
//       }
//     } else if (data > node.val) {
//       if (!node.right) {
//         node.right = new TreeNode(data)
//       } else {
//         this.insert(node.right, data)
//       }
//     }
//   }

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

  // 验证二叉搜索树
  static isValidBST (root) {
    if (!root) return true

    let walk = (node, min, max) => {
      if (!node) return true
      if (node.val <= min || node.val >= max) {
        return false
      }
      if (!node.left && !node.right) return true
      return walk(node.left, min, node.val) && walk(node.right, node.val, max)
    }
    return walk(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
  }
}

export default Tree
export { TreeNode }
