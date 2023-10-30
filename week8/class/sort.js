const animals = ['ant', 'dogs', 'cats', 'Bird', 'Birds']
animals.sort()
console.log(animals)
const nums = [5, 1, 10, 1000, 2, 3, 50]
nums.sort()
console.log(nums) //[ 1, 10, 1000, 2,  3,  5, 50]

const nums1 = [5, 1, 10, 1000, 2, 3, 50]
const numsza = nums1.sort((a, b) => a - b) // three way comparison
console.log(numsza)