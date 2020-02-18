// 最大堆
class Heap {
  constructor (data) {
    this.data = data
  }
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
