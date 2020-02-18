class Ugly {
  // constructor (n, primes) {
  //   this.n = n
  //   this.primes = primes
  // }
  // getAll () {
  //   // 超级丑数列表
  //   let res = [1]
  //   let i = 2
  //   let primes = this.primes
  //   while (res.length < this.n) {
  //     // 获得i的所有质因数
  //     let arr = Ugly.getPrimes(i)
  //     let k = 0
  //     let l = arr.length
  //     for (;k < l; k++) {
  //       if (!primes.find(item => item === arr[k])) {
  //         break
  //       }
  //     }
  //     // k===l 有两种情况，一种就是当前这个数压根没有质因数；一种是所有质因数都在指定列表中
  //     if (k === l) {
  //       if (l === 0) {
  //         if (primes.find(item => item === i)) {
  //           res.push(i)
  //         }
  //       } else {
  //         res.push(i)
  //       }
  //     }
  //     i++
  //   }
  //   return res[this.n - 1]

  // 方法二
  constructor (n, primes) {
    this.n = n
    this.primes = new Heap(primes)
  }
  getAll () {
    // 超级丑数列表
    let res = [1]
    let i = 2
    let primes = this.primes
    while (res.length < this.n) {
      // 获得i的所有质因数
      let arr = Ugly.getPrimes(i)
      let k = 0
      let l = arr.length
      for (;k < l; k++) {
        if (!primes.find(arr[k])) {
          break
        }
      }
      // k===l 有两种情况，一种就是当前这个数压根没有质因数；一种是所有质因数都在指定列表中
      if (k === l) {
        if (l === 0) {
          if (primes.find(i)) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    return res[this.n - 1]
  }
  // 计算指定正整数n的质因数
  static getPrimes (n) {
    let prime = (n) => {
      // 存储所有的质因数
      let arr = []
      for (let i = 2; i <= n / 2; i++) {
        if (!(n % i) && !(prime(i).length)) {
          arr.push(i)
        }
      }
      return arr
    }
    return prime(n)
  }
}

// 最大堆
class Heap {
  constructor (data) {
    this.data = data
    this.max = data.length
    this.sort()
  }
  // 查找时，只需要构建一次最大堆即可
  sort () {
    let iArr = this.data
    let n = iArr.length
    if (n <= 1) return iArr

    for (let i = Math.floor(n / 2); i >= 0; i--) {
      Heap.maxHeapify(iArr, i, n)
    }
    return iArr
  }

  find (val, i = 0) {
    let arr = this.data
    if (val > arr[i] || i > this.max) {
      return false
    } else if (val === arr[i]) {
      return val
    } else {
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2)
    }
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

export default Ugly
export { Heap }
