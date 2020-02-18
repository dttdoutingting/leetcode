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
  // if(num <= 0) return false
  // if(num <= 6) return true

  // while (!(num % 2)) {
  //     num = num >>> 1
  // }

  // while (!(num % 3)) {
  //     num = Math.floor(num / 3)
  // }

  // while (!(num % 5)) {
  //     num = Math.floor(num / 5)
  // }

  // if(num > 6) {
  //     return false
  // } else {
  //     return true
  // }

  // 方法3, 效率差
  if (num <= 0) return false
  if (num <= 6) return true

  let prime = (n) => {
    let arr = []

    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0 && !prime(i).length) {
        arr.push(i)
      }
    }
    return arr
  }

  let primes = prime(num)
  // console.log(primes)
  let len = primes.length
  if (len > 3 || primes) return false
  if (primes[len - 1] > 5) return false

  return true
}
