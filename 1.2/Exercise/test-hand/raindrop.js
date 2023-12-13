function raindrop(num){
    const pling=num%3===0?'Pling':''
    const plang=num%5===0?'Plang':''
    const plong=num%7===0?'Plong':''
    return pling+plang+plong||`${num}`
}
console.log(raindrop(15))