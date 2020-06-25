let contants = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let romanToInt = function (s) {
  let sArr = s.split("");
  let result = 0;
  let len = sArr.length;

  for (let i = 0; i < len; ) {
    switch (sArr[i]) {
      case "I":
        if (sArr[i + 1] === "V") {
          result = result + 4;
          i = i + 2;
        } else if (sArr[i + 1] === "X") {
          result = result + 9;
          i = i + 2;
        } else {
          result = result + contants[sArr[i]];
          i++;
        }

        break;
      case "X":
        if (sArr[i + 1] === "L") {
          result = result + 40;
          i = i + 2;
        } else if (sArr[i + 1] === "C") {
          result = result + 90;
          i = i + 2;
        } else {
          result = result + contants[sArr[i]];
          i++;
        }

        break;
      case "C":
        if (sArr[i + 1] === "D") {
          result = result + 400;
          i = i + 2;
        } else if (sArr[i + 1] === "M") {
          result = result + 900;
          i = i + 2;
        } else {
          result = result + contants[sArr[i]];
          i = i + 1;
        }

        break;
      default:
        result = result + contants[sArr[i]];
        i = i + 1;
    }
  }
  return result;
};
