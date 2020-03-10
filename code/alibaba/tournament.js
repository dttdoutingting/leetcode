export default (lines) => {
  let result = []

  // 将队伍名与比赛结果分离
  for (let i = 0; i < lines.length; i++) {
    let arr = lines[i].split(';')
    if (arr.length !== 3) {
      continue
    } else {
      result.push(arr)
    }
  }
  let teamsMap = new Map()
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (teamsMap.has(result[i][j])) {
        // 如果已经有属性，就将value+1
        teamsMap.set(result[i][j], teamsMap.get(result[i][j]) + 1)
      } else {
        teamsMap.set(result[i][j], 1)
      }
    }
  }
  // 构建计分器
  let resMatch = []
  let teams = []
  for (let [key, value] of teamsMap) {
    let arr = []
    arr = [key, value, ...[0, 0, 0, 0]]
    teams.push(key)
    resMatch.push(arr)
  }

  // 计算各个队伍的得分
  for (let i = 0; i < result.length; i++) {
    let index1 = teams.indexOf(result[i][0])
    if (index1 > -1) {
      switch (result[i][2]) {
        case 'win':
          resMatch[index1][2]++
          break
        case 'draw':
          resMatch[index1][3]++
          break
        case 'loss':
          resMatch[index1][4]++
          break
      }
    }
    let index2 = teams.indexOf(result[i][1])
    if (index2 > -1) {
      switch (result[i][2]) {
        case 'win':
          resMatch[index2][4]++
          break
        case 'draw':
          resMatch[index2][3]++
          break
        case 'loss':
          resMatch[index2][2]++
          break
      }
    }
  }

  // 计算各个队伍的总得分
  for (let i = 0; i < resMatch.length; i++) {
    resMatch[i][5] = resMatch[i][2] * 3 + resMatch[i][3]
  }
  // 按总得分降序排序
  resMatch.sort((a, b) => {
    return b[5] - a[5]
  })

  // 按要求打印数据
  let teamName = 'Team'
  console.log(teamName.padEnd(40, ' ') + '| MP |  W |  D |  L |  P\n')
  for (let i = 0; i < resMatch.length; i++) {
    let name = resMatch[i][0].padEnd(40, ' ')
    console.log(`${name}|  ${resMatch[i][1]} |  ${resMatch[i][2]} |  ${resMatch[i][3]} |  ${resMatch[i][4]} |  ${resMatch[i][5]}\n`)
  }
}
