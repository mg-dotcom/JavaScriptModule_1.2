function classify(num) {
  if (num < 1) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  let total = 0
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      total += i
    }
  }

  if (total === num) {
    return 'perfect'
  } else if (total > num) {
    return 'abundant'
  } else {
    return 'deficient'
  }
}

console.log(classify(28))
