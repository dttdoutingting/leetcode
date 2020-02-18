// 1. 统计： 统计每个字符出现的次数
// 2. 排序：
// 3. 输出
// 最大堆
class Heap {
  constructor (str) {
    let map = new Map()
    str.split('').forEach(item => {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1)
      } else {
        map.set(item, 1)
      }
    })
    this.map = map
    this.data = Array.from(map.values())
  }
  // 输出
  toString () {
    let arr = this.sort()
    let str = []
    while (arr.length) {
      let top = arr.pop()
      for (let [k, v] of this.map) {
        if (v === top) {
          str.push(k.repeat(v))
          this.map.delete(k)
          break
        }
      }
    }
    return str.join('')
  }
  // 排序
  sort () {
    let iArr = this.data
    let n = iArr.length
    if (n <= 1) return iArr

    for (let i = Math.floor(n / 2); i >= 0; i--) {
      Heap.maxHeapify(iArr, i, n)
    }
    for (let j = 0; j < n; j++) {
      Heap.swap(iArr, 0, n - 1 - j)
      Heap.maxHeapify(iArr, 0, n - 1 - j - 1)
    }
    return iArr
  }

  // 交换两个元素
  static swap (arr, a, b) {
    if (a === b) return ''

    let c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
  }
  // 构建某个节点的最大堆
  static maxHeapify (Arr, i, size) {
    // 左节点（索引）
    let l = i * 2 + 1
    let r = i * 2 + 2
    let largest = i
    // 父节点和左节点l作比较
    if (l <= size && Arr[largest] < Arr[l]) {
      largest = l
    }
    // 最大值和右节点r作比较
    if (r <= size && Arr[largest] < Arr[r]) {
      largest = r
    }

    // 交换父节点和最大值
    if (largest !== i) {
      this.swap(Arr, largest, i)
      this.maxHeapify(Arr, largest, size)
    }
  }
}

export default Heap
