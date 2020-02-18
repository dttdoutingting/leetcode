export default (num) => {
  // let isUgly = (n) => {
  //     if(n <= 0) return false
  //     if(n <= 6) return true

  //     if(!(n % 2)) {
  //         n = n >>> 1
  //         return isUgly(n)
  //     }
  //     if(!(n % 3)) {
  //         n = Math.floor(n / 3)
  //         return isUgly(n)
  //     }
  //     if(!(n % 5)) {
  //         n = Math.floor(n / 5)
  //         return isUgly(n)
  //     }

  //     if(n > 6) {
  //         return false
  //     }else {
  //         return true
  //     }

  // }

  // return isUgly(num)

  // 方法2
  if (num <= 0) return false
  if (num <= 6) return true

  while (num % 2 === 0) {
    num = num >>> 1
  }

  while (num % 3 === 0) {
    num = Math.floor(num / 3)
  }

  while (num % 5 === 0) {
    num = Math.floor(num / 5)
  }

  return num === 1
}
