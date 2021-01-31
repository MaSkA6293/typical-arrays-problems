exports.min = function min(array) {
  if (checkArray(array)) {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i]
      }
    }
    return min;
  } else {
    return 0
  }
}

exports.max = function max(array) {
  if (checkArray(array)) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i]
      }
    }
    return max;
  } else {
    return 0
  }

}

exports.avg = function avg(array) {
  if (checkArray(array)) {
    return array.reduce((acc, curr) => {
      return acc = acc + curr
    }, 0) / array.length
  } else {
    return 0
  }
}

function checkArray(array) {
  if (!Array.isArray(array)) {
    return false
  }
  if (array.length === 0) {
    return false
  }
  return true
}