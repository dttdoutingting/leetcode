export default (nums) => {
  let len = nums.length
  if (len <= 1) return [nums]

  let res = [[nums[0]]]
  for (let i = 1; i < len; i++) {
    for (let j = 0, rlen = res.length; j < rlen; j++) {
      let temp = res[0].slice(0)
      let p = temp.slice(0)
      for (let k = res[0].length; k >= 0; k--) {
        temp.splice(k, 0, nums[i])
        res.push(temp)
        temp = p.slice(0)
      }
      temp.length = p.length = 0
      res.shift()
    }
  }
  return res
}
