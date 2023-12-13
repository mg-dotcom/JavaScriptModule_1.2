function counter() {
    let count = 100
    function increment() {
      return ++count
    }
    function decrement() {
      return --count
    }
    function getCount() {
      return count
    }
    // return { getCount: getCount, increment: increment, decrement: decrement }
    return { getCount, increment, decrement }
  }
  const fn = counter()
  console.log(typeof fn.getCount) //function
  console.log(fn.getCount) //[Function: getCount]
  console.log(fn.getCount()) //100
  console.log(typeof fn.increment) //function
  console.log(fn.increment) //[Function: getCount]
  console.log(fn.increment()) //101
  console.log(typeof fn.decrement) //function
  console.log(fn.decrement) //[Function: getCount]
  console.log(fn.decrement()) //100
  const { getCount, increment, decrement } = counter() //destructuring
  console.log(getCount())
  console.log(increment())
  console.log(decrement())