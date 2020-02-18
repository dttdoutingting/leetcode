export default(A) => {
  if (A.length < 2) return A

  let A1 = new Array(A.length)

  for (let i = 0, index = 0, len = A.length; i < len; i++) {
    if (A[i] % 2 === 0) {
      A1[2 * index] = A[i]
      index++
    } else {
      A1[2 * index + 1] = A[i]
    }
  }

  for (let i = 0, index = 0, len = A.length; i < len; i++) {
    if (A[i] % 2 !== 0) {
      A1[2 * index + 1] = A[i]
      index++
    }
  }

  A = A1.slice(0)
  A1.length = 0

  return A
}
