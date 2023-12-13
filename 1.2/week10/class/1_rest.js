function ops(n1, n2, n3){ // use rest function ops(n1, n2, ...n3) 
                          // ได้เเค่จุดสุดท้าย เเละ เหมาเข่งไปเลย ops(1,true,"xyz",10.5) เริ่มรับตั้งเเต่ "xyz"
    //formal parameter
    console.log(n1)
    arguments[0] = 555 // เปลี่ยนค่าของ arguments[0] = n1
    console.log(n1) 
    arguments[0] = 1
    for (const argu of arguments){
        console.log(argu)
    }
    // console.log(n3) -> ops(1,true,"xyz") -> n3: ["xyz"] ออกมาเป็น array ตลอด
}

ops(1,true,"xyz")
ops(1,true,"xyz",10.5) // actual parameter

// ex

function sum(...num){
    return num.reduce((total, current) => total + current, 0)
}

console.log(sum(1,2,3))
console.log(sum(1,2,3,22,55))