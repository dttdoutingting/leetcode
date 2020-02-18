export default (nums) => {
  // 数组长度小于2时，返回0
  if (nums.length < 2) return 0

  // 排序
  nums.sort((a, b) => {
    return a - b
  })
  // 缓存最大值
  let max = 0
  for (let i = 0, len = nums.length, tmp; i < len - 1; i++) {
    tmp = nums[i + 1] - nums[i]
    if (tmp > max) {
      max = tmp
    }
  }

  // let max = 0
  // for (let i = 0; i < nums.length; i++) {
  //   let tmp = 0
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] > nums[j]) {
  //       tmp = nums[i]
  //       nums[i] = nums[j]
  //       nums[j] = tmp
  //     }
  //   }

  //   if (i > 0) {
  //     tmp = nums[i] - nums[i - 1]
  //     max = tmp > max ? tmp : max
  //   }
  // }

  return max
}
