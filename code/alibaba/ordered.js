class ListNode {
  constructor (node) {
    this.val = node
    this.next = null
  }
}
class List {
  constructor (data) {
    let len = data.length
    let res = new Array(len)
    let tmp = []
    for (let i = 0; i < len; i++) {
      if (data[i].first) {
        res[0] = data[i]
      }
    }
    for (let i = 0; i < len; i++) {
      if (data[i].before) {
        let left = new ListNode(data[i].before)
        let right = new ListNode(data[i].id)
        left.next = right
        tmp.push(left)
      } else if (data[i].after) {
        let left = new ListNode(data[i].id)
        let right = new ListNode(data[i].after)
        left.next = right
        tmp.push(left)
      } else if (!data[i].after) {
        res.push(data[i])
      }
    }

    for (let i = 0; i < len; i++) {
      if (data[i].last) {
        res.push(data[i])
      }
    }
    return res
  }
}
export default List

export { ListNode }
