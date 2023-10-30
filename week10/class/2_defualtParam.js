function ops(n1 = 'F', n2 = 'False', n3 = 'unknown'){
    return {n1,n2,n3}
}
console.log(ops()) //{ n1: 'F', n2: 'False', n3: 'unknown' }
console.log(ops("Apsiara",20,"KMUTT")) //{ n1: 'Apsiara', n2: 20, n3: 'KMUTT' }
console.log(ops(undefined,undefined,undefined)) //{ n1: 'F', n2: 'False', n3: 'unknown' }
console.log(ops(null,null,null)) //{ n1: null, n2: null, n3: null }
console.log(ops("A",undefined,"KMUTT"))