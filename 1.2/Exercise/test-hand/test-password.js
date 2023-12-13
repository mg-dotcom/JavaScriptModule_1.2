// 65130500109 ใบตอง แซ่โค้ว
function isPasswordValid(password) {
    if(password===null||password===undefined){
      return false
    }
    const pass=[...password]
    if(pass.length<8){
      return false
    }
  let count=0
    for(let i=0;i<pass.length;i++){
      const uppercase=/[A-Z]/g
      if(pass[i].match(uppercase)){
        count=count+1
        break
      }
    }
    for(let i=0;i<pass.length;i++){
      const lowercase=/[a-z]/g
      if(pass[i].match(lowercase)){
        count=count+1
        break
      }
    }
    for(let i=0;i<pass.length;i++){
      const digit=/[0-9]/g
      if(pass[i].match(digit)){
        count=count+1
        break
      }
    }
    for(let i=0;i<pass.length;i++){
      const spe=/[@, #, $, %, ^, &, *, !]/g
      if(pass[i].match(spe)){
        count=count+1
        break
      }
    }
  if(count===4){
    return true
  }else{
    return false
  } 
  
  }
  console.log(isPasswordValid(password)) 