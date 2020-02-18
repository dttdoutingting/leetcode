export default (n) => {
  if (n <= 6) {
    return n
  }
  let array = []
  array[0] = 1
  let multiply2 = 0// 代表T2
  let multiply3 = 0// 代表T3
  let multiply5 = 0// 代表T5
  let location = 1
  while (location < n) {
    let min2 = array[multiply2] * 2// Min2
    let min3 = array[multiply3] * 3// Min3
    let min5 = array[multiply5] * 5// Min5
    let min = 0
    if (min2 <= min3 && min2 <= min5) {
      min = min2
    } else if (min3 <= min2 && min3 <= min5) {
      min = min3
    } else if (min5 <= min2 && min5 <= min3) {
      min = min5
    }
    array[location] = min// 此时是已知丑数序列的最大值Max
    while (min >= array[multiply2] * 2) {
      multiply2++
    }
    while (min >= array[multiply3] * 3) {
      multiply3++
    }
    while (min >= array[multiply5] * 5) {
      multiply5++
    }
    location++
  }
  return array[location - 1]
}
