const stds = [
    {name: 'Baitong', score: 85},
    {name: 'Ant', score: 55},
    {name: 'Karn', score: 75},
    {name: 'ant', score: 55},
    {name: 'ANT', score: 66}
];

const findName = stds.find(std => std.name.toLowerCase() === 'ant' && std.score > 30)
const findName2 = stds.filter(std => std.name.toLowerCase() === 'ant' && std.score > 30)

console.log(findName)
console.log(findName2)

