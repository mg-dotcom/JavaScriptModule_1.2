function calculateBMI(weight, height) {
  return weight / (height * height)
}

function getBMIMeaning(weight, height) {
  if (calculateBMI(weight, height) < 18.5) {
    return console.log('Underweight')
  } else if (
    calculateBMI(weight, height) > 18.5 &&
    calculateBMI(weight, height) < 24.9
  ) {
    return console.log('Normal weight')
  } else if (calculateBMI(weight, height) > 25) {
    return console.log('Overweight')
  }
}
getBMIMeaning(65, 1.8)
getBMIMeaning(80, 1.7)
getBMIMeaning(44, 1.6)
