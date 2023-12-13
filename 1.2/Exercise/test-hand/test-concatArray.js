function concatArray(array1, array2) {
  if (
    (array1 === null || array1 === undefined) &&
    (array2 === null || array2 === undefined)
  ) {
    return undefined
  } else if (array1.length === 0) {
    return array2
  } else if (array2.length === 0) {
    return array1
  } else if (array1.length === 0 && array2.length === 0) {
    return []
  } else {
    return console.log(array1.concat(array2))
  }
}

concatArray([2], null)
